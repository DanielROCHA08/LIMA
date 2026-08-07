/*Adicionando um "Listener" para o movimento do mouse*/
window.addEventListener("mousemove", (e) => {
    /*Criando uma div contendo o caracter que representa uma estrela*/
    const estrelinha = document.createElement("div")  
    estrelinha.className = "estrelinha";
    estrelinha.style.position = "fixed";
    estrelinha.innerHTML = "&#10022;";
    estrelinha.style.left = e.clientX + "px";
    estrelinha.style.top = e.clientY + "px";

    const xAleatorio = (Math.random() - 0.5) * 50 + "px";
    estrelinha.style.setProperty("--xAleatorio", xAleatorio);

    /*Acrescentando a div classe "estrelinha" ao body*/
    document.body.appendChild(estrelinha);


    e.clientX
    e.clientY



    setTimeout(() =>{
        estrelinha.remove()
    }, 99999999999)

})