function Camera({ aoNavegar }) {
    return (
        <>
            <header className="camera-top">
                <button type="button" aria-label="Flash">Flash</button>
                <button type="button" aria-label="HDR">HDR</button>
                <button type="button" aria-label="Modo IA">AI</button>
                <button type="button" aria-label="Configurações">Config</button>
            </header>

            <main className="viewport-camera">
                <span>Aponte para o cenário</span>
            </main>

            <section className="camera-bottom">
                <div className="zoom-chips">
                    <span className="chip">0.6x</span>
                    <span className="chip chip-ativo">1x</span>
                    <span className="chip">2x</span>
                </div>

                <nav className="modos-camera">
                    <a href="#" className="modo">Noite</a>
                    <a href="#" className="modo">Retrato</a>
                    <a href="#" className="modo modo-ativo">Foto</a>
                    <a href="#" className="modo">Vídeo</a>

                    <a href="#"
                        className="modo"
                        onClick={(e) => {
                            e.preventDefault();
                            aoNavegar("ia-sugere");
                        }}
                    >
                        Estudo
                    </a>
                </nav>

                <div className="controles-camera">

                    <a href="#"
                        className="miniatura"
                        aria-label="Abrir galeria"
                        onClick={(e) => {
                            e.preventDefault();
                            aoNavegar("galeria");
                        }}
                    ></a>
                    <button
                        type="button"
                        className="obturador"
                        aria-label="Capturar foto"
                        onClick={() => aoNavegar("ia-sugere")}
                    >
                        <span className="obturador-interno"></span>
                    </button>
                    <button type="button" className="switch-camera" aria-label="Trocar câmera">
                        &#8634;
                    </button>
                </div>
            </section>
        </>
    );
}

export default Camera;