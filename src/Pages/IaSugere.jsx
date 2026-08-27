import { useState } from "react";

function IaSugere({ aoNavegar }) {
    const [confianca] = useState(() => {
        const minimo = 85;
        const maximo = 99;
        return Math.round(Math.random() * (maximo - minimo) + minimo);
    });

    return (
        <>
            <main className="viewport-camera">
                <span>Sala de aula detectada</span>
            </main>

            <div className="modal-overlay">
                <div className="modal">
                    <span className="modal-badge">AI</span>
                    <h2>IA sugere: Modo Estudo</h2>
                    <p>Detectamos uma sala de aula</p>
                    <span className="caption">{confianca}% de confiança</span>
                    <div className="modal-acoes">

                        <a href="#"
                            className="botao-primario"
                            onClick={(e) => {
                                e.preventDefault();
                                aoNavegar("modo-estudo");
                            }}
                        >
                            Aceitar
                        </a>

                        <a href="#"
                            className="botao-secundario"
                            onClick={(e) => {
                                e.preventDefault();
                                aoNavegar("camera");
                            }}
                        >
                            Ignorar
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IaSugere;