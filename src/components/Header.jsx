function Header({ titulo, aoVoltar, extra }) {
  return (
    <header className="top-bar">
      <button type="button" className="botao-voltar" onClick={aoVoltar} aria-label="Voltar">
        &larr;
      </button>
      <h1>{titulo}</h1>
      <span>{extra}</span>
    </header>
  );
}

export default Header;