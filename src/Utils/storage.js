export function salvarNoStorage(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
}

export function lerDoStorage(chave, valorPadrao) {
    const dado = localStorage.getItem(chave);
    if (dado === null) return valorPadrao;
    try {
        return JSON.parse(dado);
    } catch {
        return valorPadrao;
    }
}

export function removerDoStorage(chave) {
    localStorage.removeItem(chave);
}