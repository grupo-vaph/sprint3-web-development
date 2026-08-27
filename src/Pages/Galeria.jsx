import { useState } from "react";

const FOTOS = [
    { materia: "Python", cor: "#3040C4" },
    { materia: "Front-End", cor: "#6C7BF0" },
    { materia: "Software", cor: "#10B981" },
    { materia: "Web Dev", cor: "#F59E0B" },
    { materia: "Storytelling", cor: "#EF4444" },
    { materia: "Python", cor: "#8B8BA3" },
];

const FILTROS = ["Todos", "Python", "Front-End", "Software", "Storytelling", "Web Dev"];

function Galeria() {
    const [filtroAtivo, setFiltroAtivo] = useState("Todos");
    const [indiceAberto, setIndiceAberto] = useState(null);

    const fotosFiltradas =
        filtroAtivo === "Todos" ? FOTOS : FOTOS.filter((foto) => foto.materia === filtroAtivo);

    function fotoAnterior() {
        setIndiceAberto((atual) => (atual - 1 + fotosFiltradas.length) % fotosFiltradas.length);
    }

    function fotoProxima() {
        setIndiceAberto((atual) => (atual + 1) % fotosFiltradas.length);
    }

    return (
        <>
            <main className="conteudo">
                <nav className="filtros">
                    {FILTROS.map((filtro) => (
                        <span
                            key={filtro}
                            className={`chip ${filtroAtivo === filtro ? "chip-ativo" : ""}`}
                            onClick={() => setFiltroAtivo(filtro)}
                        >
                            {filtro}
                        </span>
                    ))}
                </nav>

                <h2 className="subtitulo-secao">Hoje, 15 de Abril · {fotosFiltradas.length} documentos</h2>
                <section className="grid-fotos">
                    {fotosFiltradas.map((foto, indice) => (
                        <div
                            className="foto"
                            key={indice}
                            style={{ backgroundColor: foto.cor }}
                            onClick={() => setIndiceAberto(indice)}
                        >
                            {foto.materia}
                        </div>
                    ))}
                </section>
            </main>

            {indiceAberto !== null && (
                <div className="lightbox" style={{ display: "flex" }}>
                    <button
                        type="button"
                        className="lightbox-fechar"
                        onClick={() => setIndiceAberto(null)}
                        aria-label="Fechar"
                    >
                        &times;
                    </button>
                    <button
                        type="button"
                        className="lightbox-seta lightbox-seta-anterior"
                        onClick={fotoAnterior}
                        aria-label="Anterior"
                    >
                        &lsaquo;
                    </button>
                    <div
                        className="lightbox-imagem"
                        style={{ backgroundColor: fotosFiltradas[indiceAberto].cor }}
                    >
                        {fotosFiltradas[indiceAberto].materia}
                    </div>
                    <button
                        type="button"
                        className="lightbox-seta lightbox-seta-proxima"
                        onClick={fotoProxima}
                        aria-label="Próxima"
                    >
                        &rsaquo;
                    </button>
                    <span className="lightbox-indicador">
                        {indiceAberto + 1} de {fotosFiltradas.length}
                    </span>
                </div>
            )}
        </>
    );
}

export default Galeria;