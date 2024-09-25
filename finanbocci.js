function contarLetraA(string) {
  // Converte a string para minúsculas
  const stringLower = string.toLowerCase();
  
  // Conta quantas vezes 'a' aparece na string
  const quantidade = stringLower.split('a').length - 1;

  // Verifica se a letra 'a' existe na string
  const existe = quantidade > 0;

  // Exibe o resultado
  console.log(`A letra 'a' existe na string? ${existe}`);
  console.log(`Quantidade de vezes que 'a' aparece: ${quantidade}`);
}

// Função para escolher entre entrada do usuário
function iniciar() {
  const usarEntradaUsuario = confirm("Deseja inserir uma string? Clique em 'OK' para sim, ou 'Cancelar' para usar uma string pré-definida.");

  if (usarEntradaUsuario) {
      // Solicita ao usuário que insira uma string
      const textoUsuario = prompt("Por favor, insira uma string:");
      contarLetraA(textoUsuario);
  } else {
      const textoPredefinido = "Aquele animal estava na sala.";
      contarLetraA(textoPredefinido);
  }
}

// Inicia o programa
iniciar();
