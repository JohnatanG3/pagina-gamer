// Selecionando o formulário e a div para manipulação de exibição
const corpo = document.querySelector("div"); // Seleciona a primeira <div> do documento
const formulario = document.querySelector("form"); // Seleciona o elemento <form> do documento

// Função para abrir o formulário
function abrirFormulario() {
    formulario.style.opacity = 1; // Torna o formulário visível ao definir a opacidade como 1
    corpo.style.opacity = 0.2; // Reduz a visibilidade da <div> para destacar o formulário
}

// Função para voltar (fechar o formulário)
function voltar() {
    formulario.style.opacity = 0; // Torna o formulário invisível ao definir a opacidade como 0
    corpo.style.opacity = 1; // Restaura a visibilidade total da <div>
}