function contarLetraA(string) {
    // Converte a string para minúsculas para facilitar a contagem
    const stringLower = string.toLowerCase();
    
    // Conta quantas vezes 'a' aparece na string
    const quantidade = stringLower.split('a').length - 1;

    // Verifica se a letra 'a' existe na string
    const existe = quantidade > 0;

    // Exibe o resultado
    console.log(`A letra 'a' existe na string? ${existe}`);
    console.log(`Quantidade de vezes que 'a' aparece: ${quantidade}`);
}

// Exemplo de uso
const texto = "Aquele animal estava na sala.";
contarLetraA(texto);
