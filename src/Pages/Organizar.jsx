const CORES = ["#3040C4", "#6C7BF0", "#10B981", "#F59E0B", "#EF4444", "#8B8BA3"];

function Organizar({ materias, aoAdicionarMateria, aoNavegar }) {
  const totalDocumentos = materias.reduce((soma, materia) => soma + materia.documentos, 0);

  function adicionarMateria() {
    const nome = prompt("Nome da matéria:");
    if (nome !== null && nome.trim() !== "") {
      const corAleatoria = CORES[Math.floor(Math.random() * CORES.length)];
      const idUnico = Date.now() + Math.floor(Math.random() * 1000);
      aoAdicionarMateria({ id: idUnico, nome: nome.trim(), documentos: 0, cor: corAleatoria });
    }
  }

  return (
    <main className="conteudo">
      <div className="banner-sucesso">
        &#10003; Auto-classificado: Comp. Thinking with Python — {totalDocumentos} documentos no total ·
        Última captura: hoje
      </div>

      <h2 className="subtitulo-secao">Suas matérias</h2>

      <ul className="lista-materias">
        {materias.map((materia) => (
          <li className="card-materia" key={materia.id}>
            <div className="barra-lateral" style={{ backgroundColor: materia.cor }}></div>
            <div className="info-materia">
              <strong>{materia.nome}</strong>
              <span>{materia.documentos} documentos</span>
            </div>
            <span className="chevron">&rsaquo;</span>
          </li>
        ))}
      </ul>


      <a href="#"
        className="botao-primario botao-largo"
        onClick={(e) => {
          e.preventDefault();
          aoNavegar("galeria");
        }}
      >
        Salvar e ver galeria
      </a>
      <button type="button" className="botao-secundario botao-largo" onClick={adicionarMateria}>
        + Adicionar matéria
      </button>
    </main>
  );
}

export default Organizar;