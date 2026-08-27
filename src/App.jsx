import { useState } from "react";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Camera from "./Pages/Camera";
import IaSugere from "./Pages/IaSugere";
import "./style.css";

function App() {
  const [logado, setLogado] = useState(false);
  const [tela, setTela] = useState("camera");

  function navegarPara(novaTela) {
    setTela(novaTela);
  }

  if (!logado) {
    return (
      <div className="celular">
        <Login aoLogar={() => setLogado(true)} />
      </div>
    );
  }

  return (
    <div className="celular">
      {tela === "camera" && <Camera aoNavegar={navegarPara} />}
      {tela === "ia-sugere" && <IaSugere aoNavegar={navegarPara} />}

      {tela === "camera" && <Footer telaAtiva={tela} aoNavegar={navegarPara} />}
    </div>
  );
}

export default App;