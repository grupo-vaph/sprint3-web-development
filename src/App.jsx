import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "../src/Pages/Pages";
import "./style.css";

function App() {
  const [logado, setLogado] = useState(false);
  const [telaAtiva, setTelaAtiva] = useState("camera");

  if (!logado) {
    return (
      <div className="celular">
        <Login aoLogar={() => setLogado(true)} />
      </div>
    );
  }

  return (
    <div className="celular">
      <Header titulo="Jovi Camera" aoVoltar={() => alert("Voltar clicado")} />

      <main className="conteudo">
        <p>Tela atual: {telaAtiva}</p>
      </main>

      <Footer telaAtiva={telaAtiva} aoNavegar={setTelaAtiva} />
    </div>
  );
}

export default App;