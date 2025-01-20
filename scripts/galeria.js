// Adiciona um evento que será executado quando o conteúdo do DOM for completamente carregado
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as imagens com a classe "galeria__imagem"
    const imagens = document.querySelectorAll(".galeria__imagem");
    
    // Para cada imagem encontrada, adiciona um evento de clique
    imagens.forEach(imagem => {
        imagem.addEventListener("click", () => {
            // Cria um elemento div para servir como lightbox
            const lightbox = document.createElement("div");
            // Adiciona a classe "lightbox" ao div criado
            lightbox.classList.add("lightbox");
            // Adiciona o lightbox ao corpo do documento
            document.body.appendChild(lightbox);

            // Cria um elemento img para exibir a imagem clicada no lightbox
            const img = document.createElement("img");
            // Define o src da nova imagem como o src da imagem clicada
            img.src = imagem.src;
            // Define o alt da nova imagem como o alt da imagem clicada
            img.alt = imagem.alt;
            // Adiciona a nova imagem ao lightbox
            lightbox.appendChild(img);

            // Adiciona um evento de clique ao lightbox para fechá-lo ao clicar fora da imagem
            lightbox.addEventListener("click", () => {
                // Remove o lightbox do documento
                lightbox.remove();
            });
        });
    });
});