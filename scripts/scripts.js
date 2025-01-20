// Adiciona um evento que será executado quando o conteúdo do DOM for completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o elemento do menu suspenso
    const dropdown = document.querySelector(".cabecalho__menu__dropdown");
    // Seleciona o conteúdo do menu suspenso
    const dropdownContent = document.querySelector(".cabecalho__menu__dropdown__content");

    // Adiciona um evento de clique ao menu suspenso
    dropdown.addEventListener("click", (e) => {
        // Impede o clique de fechar imediatamente
        e.stopPropagation();
        // Alterna a exibição do conteúdo do menu suspenso entre "block" e "none"
        dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", () => {
        // Define a exibição do conteúdo do menu suspenso como "none"
        dropdownContent.style.display = "none";
    });
});