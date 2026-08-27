import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Camera from "./pages/Camera";
import IaSugere from "./pages/IaSugere";
import ModoEstudo from "./pages/ModoEstudo";
import OcrResultado from "./pages/OcrResultado";
import { lerDoStorage, salvarNoStorage } from "./utils/storage";
import "./style.css";

const MATERIAS_PADRAO = [
  { nome: "Comp. Thinking with Python", documentos: 23, cor: "#3040C4" },
  { nome: "Front-End Design", documentos: 10, cor: "#6C7BF0" },
  { nome: "Software & Total Exp. Design", documentos: 12, cor: "#10B981" },
  { nome: "Storytelling e Insp. Empreendedora", documentos: 17, cor: "#F59E0B" },
  { nome: "Web Development", documentos: 15, cor: "#EF4444" },
];

// Configuração de cabeçalho por tela (título e para onde volta)
const CONFIG_TELAS = {
  "modo-estudo": { titulo: "Modo Estudo", voltarPara: "ia-sugere" },
  "ocr-resultado": { titulo: "Resultado OCR", voltarPara: "modo-estudo" },
};

function App() {
  const [logado, setLogado] = useState(false);
  const [tela, setTela] = useState("camera");
  // Lê as matérias do localStorage assim que o app inicia (se não houver
  // nada salvo ainda, usa a lista padrão)
  const [materias, setMaterias] = useState(() => lerDoStorage("jovi_materias", MATERIAS_PADRAO));

  function navegarPara(novaTela) {
    setTela(novaTela);
  }

  // Chamada quando um novo documento é capturado via OCR: incrementa o
  // contador da matéria correspondente e persiste no localStorage.
  function registrarDocumento({ materia, palavras }) {
    setMaterias((atual) => {
      const atualizado = atual.map((item) =>
        item.nome === materia ? { ...item, documentos: item.documentos + 1 } : item
      );
      salvarNoStorage("jovi_materias", atualizado);
      return atualizado;
    });
    void palavras;
  }

  if (!logado) {
    return (
      <div className="celular">
        <Login aoLogar={() => setLogado(true)} />
      </div>
    );
  }

  const configAtual = CONFIG_TELAS[tela];

  return (
    <div className="celular">
      {configAtual && (
        <Header titulo={configAtual.titulo} aoVoltar={() => navegarPara(configAtual.voltarPara)} />
      )}

      {tela === "camera" && <Camera aoNavegar={navegarPara} />}
      {tela === "ia-sugere" && <IaSugere aoNavegar={navegarPara} />}
      {tela === "modo-estudo" && <ModoEstudo aoNavegar={navegarPara} />}
      {tela === "ocr-resultado" && (
        <OcrResultado aoNavegar={navegarPara} aoRegistrarDocumento={registrarDocumento} />
      )}
      {tela === "organizar" && (
        <main className="conteudo">
          <p>Total de matérias salvas: {materias.length}</p>
        </main>
      )}

      {tela === "camera" && <Footer telaAtiva={tela} aoNavegar={navegarPara} />}
    </div>
  );
}

export default App;