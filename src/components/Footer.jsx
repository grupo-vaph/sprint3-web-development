function Footer({ telaAtiva, aoNavegar }) {
  return (
    <nav className="bottom-nav">

      <a href="#"
        className={telaAtiva === "camera" ? "ativo" : ""}
        onClick={(error) => {
          error.preventDefault();
          aoNavegar("camera");
        }}
      >
        Câmera
      </a>

      <a href="#"
        className={telaAtiva === "galeria" ? "ativo" : ""}
        onClick={(error) => {
          error.preventDefault();
          aoNavegar("galeria");
        }}
      >
        Galeria
      </a>

      <a href="#"
        className={telaAtiva === "organizar" ? "ativo" : ""}
        onClick={(error) => {
          error.preventDefault();
          aoNavegar("organizar");
        }}
      >
        Matérias
      </a>
    </nav>
  );
}

export default Footer;