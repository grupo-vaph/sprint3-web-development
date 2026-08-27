import { useState } from "react";

function Login({ aoLogar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  function validarEmail(valor) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(valor);
  }

  function aoEnviar(evento) {
    evento.preventDefault();
    setErroEmail("");
    setErroSenha("");

    if (email.trim() === "") {
      setErroEmail("Preencha o e-mail.");
      return;
    }
    if (!validarEmail(email)) {
      setErroEmail("Formato de e-mail inválido.");
      return;
    }
    if (senha === "") {
      setErroSenha("Preencha a senha.");
      return;
    }
    if (senha.length < 6) {
      setErroSenha("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    aoLogar();
  }

  return (
    <main>
      <form className="form-login" onSubmit={aoEnviar} noValidate>
        <h1 className="logo-login">Jovi Camera</h1>
        <p className="subtitulo-login">Entre com sua conta</p>

        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
          />
          <span className="erro">{erroEmail}</span>
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
          <span className="erro">{erroSenha}</span>
        </div>

        <button type="submit" className="botao-primario">
          Entrar
        </button>

        <a href="#" className="link">
          Esqueci minha senha
        </a>
      </form>
    </main>
  );
}

export default Login;