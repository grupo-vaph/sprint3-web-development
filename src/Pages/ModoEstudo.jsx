function ModoEstudo({ aoNavegar }) {
    return (
        <main className="conteudo">
            <div className="banner-sucesso">&#10003; Documento detectado</div>

            <section className="viewport-estudo">
                <div className="documento-detectado">Documento</div>
            </section>

            <nav className="sub-modos">
                <a href="#" className="sub-modo">Perspectiva</a>
                <a href="#" className="sub-modo">Sombras</a>
                <a href="#" className="sub-modo">OCR</a>
                <a href="#" className="sub-modo">Organizar</a>
            </nav>

            <div className="toggle-auto">
                <button type="button" className="ativo">Auto</button>
                <button type="button">Manual</button>
            </div>

            <div className="area-obturador">

                <a href="#"
                    className="obturador"
                    aria-label="Capturar"
                    onClick={(e) => {
                        e.preventDefault();
                        aoNavegar("ocr-resultado");
                    }}
                >
                    <span className="obturador-interno"></span>
                </a>
            </div>
        </main>
    );
}

export default ModoEstudo;