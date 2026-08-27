import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  const [telaAtiva, setTelaAtiva] = useState("camera");

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