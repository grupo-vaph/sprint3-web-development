import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Camera from "./Pages/Camera";
import IaSugere from "./Pages/IaSugere";
import ModoEstudo from "./Pages/ModoEstudo";
import OcrResultado from "./Pages/OcrResultado";
import Organizar from "./Pages/Organizar";
import Galeria from "./Pages/Galeria";
import { lerDoStorage, salvarNoStorage } from "./Utils/storage";
import "./style.css";

const MATERIAS_PADRAO = [
  { id: 1, nome: "Comp. Thinking with Python", documentos: 23, cor: "#3040C4" },
  { id: 2, nome: "Front-End Design", documentos: 10, cor: "#6C7BF0" },
  { id: 3, nome: "Software & Total Exp. Design", documentos: 12, cor: "#10B981" },
  { id: 4, nome: "Storytelling e Insp. Empreendedora", documentos: 17, cor: "#F59E0B" },
  { id: 5, nome: "Web Development", documentos: 15, cor: "#EF4444" },
];

const CONFIG_TELAS = {
  "modo-estudo": { titulo: "Modo Estudo", voltarPara: "ia-sugere" },
  "ocr-resultado": { titulo: "Resultado OCR", voltarPara: "modo-estudo" },
  organizar: { titulo: "Organizar por matéria", voltarPara: "ocr-resultado" },
  galeria: { titulo: "Galeria Acadêmica", voltarPara: "organizar" },
};

function App() {
  const [logado, setLogado] = useState(false);
  const [tela, setTela] = useState("camera");
  const [materias, setMaterias] = useState(() => {
    const carregado = lerDoStorage("jovi_materias", MATERIAS_PADRAO);
    salvarNoStorage("jovi_materias", carregado);
    return carregado;
  });

  function navegarPara(novaTela) {
    setTela(novaTela);
  }

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

  function adicionarMateria(novaMateria) {
    setMaterias((atual) => {
      const atualizado = [...atual, novaMateria];
      salvarNoStorage("jovi_materias", atualizado);
      return atualizado;
    });
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
        <Organizar materias={materias} aoAdicionarMateria={adicionarMateria} aoNavegar={navegarPara} />
      )}
      {tela === "galeria" && <Galeria />}

      {["camera", "organizar", "galeria"].includes(tela) && (
        <Footer telaAtiva={tela} aoNavegar={navegarPara} />
      )}
    </div>
  );
}

export default App;