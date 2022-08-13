function carregar() {
    const msg = document.getElementById('msg');
    const img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.webp'
        document.body.style.background = '#FEDAAA'
    }
    else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.webp'
        document.body.style.background = '#EA8F49'
    }
    else {
        img.src = 'imagens/noite.webp'
        document.body.style.background = '#4A3B5C'
    }
}