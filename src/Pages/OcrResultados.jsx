import { useEffect, useState } from "react";

const TEXTO_OCR = `Comp. Thinking with Python - Aula 05

Estrutura de Repetição: while

O comando while repete um bloco de código enquanto a condição for True.
A cada iteração, a condição é reavaliada.

Exemplo:

contador = 0
while contador < 5:
    print(contador)
    contador += 1

Saída: 0, 1, 2, 3, 4`;

function OcrResultado({ aoNavegar, aoRegistrarDocumento }) {
    const [precisao] = useState(() => Math.round(Math.random() * 4 + 95));
    const totalPalavras = TEXTO_OCR.split(/\s+/).filter(Boolean).length;

    useEffect(() => {
        aoRegistrarDocumento({
            materia: "Comp. Thinking with Python",
            palavras: totalPalavras,
        });
    }, []);

    function copiarTexto() {
        navigator.clipboard.writeText(TEXTO_OCR);
        alert("Texto copiado!");
    }

    return (
        <main className="conteudo">
            <div className="banner-sucesso">
                &#10003; OCR concluído — {precisao}% de precisão · {totalPalavras} palavras extraídas
            </div>

            <article className="card-ocr">
                <pre>{TEXTO_OCR}</pre>
            </article>

            <span className="chip-detectado">Comp. Thinking with Python (detectado)</span>

            <div className="botoes-acao">
                <button type="button" className="botao-secundario" onClick={copiarTexto}>
                    Copiar texto
                </button>
                <button type="button" className="botao-secundario">
                    Salvar PDF
                </button>
            </div>


            <a href="#"
                className="botao-primario botao-largo"
                onClick={(e) => {
                    e.preventDefault();
                    aoNavegar("organizar");
                }}
            >
                Organizar por matéria
            </a>
        </main>
    );
}

export default OcrResultado;