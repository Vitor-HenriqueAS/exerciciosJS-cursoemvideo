function verificarIdade(){
    var formAno = document.getElementById("txtano");
    var formSex = document.getElementsByName('radsex');
    var resultado = document.getElementById("res");

    var data = new Date();
    var ano = data.getFullYear();
    var idade = ano - Number(formAno.value);

    var img = document.createElement ('img');
    img.setAttribute('id','foto');

    var pessoaFuturo = formAno.value > ano;
    var pessoaPassado = idade > 200;
    
    var tudoOk = Number(formAno.value) <= ano + 1000;

    if (tudoOk) {
        if (pessoaFuturo) {
            idade = Math.abs(idade);
            resultado.innerHTML = 'Detectamos que você irá nascer ainda, '+
            `então não temos uma imagem para isso. Daqui talvez, há ${idade} anos eu te vejo novamente !`;
            img.setAttribute('src', './imagens/futuro.jpg');
        }
        else if(pessoaPassado) {
            resultado.innerHTML = 'Você é um Alien ? <br>'+
            `Pois você tem ${idade} anos !`;
            img.setAttribute('src', './imagens/alien.jpg');
        }
        else {
            if(formSex[1].checked) {
                let genExtensao = "-f.jpg";
                var genero = "Feminino";
                qualIdade(idade, genExtensao, img);
            }
            else {
                let genExtensao = "-m.jpg";
                var genero = "Masculino";
                qualIdade(idade, genExtensao, img);
            }
            resultado.innerHTML = `Detectamos - ${genero} com ${idade} anos de idade`;
        }
        resultado.appendChild(img);
    }
}

function qualIdade(idade, gen, img) {
    if(idade >= 0 && idade < 10) {
        img.setAttribute('src', './imagens/bebe'+gen);
    }
    else if(idade < 21) {
        img.setAttribute('src', './imagens/jovem'+gen);
    }
    else if(idade < 50) {
        img.setAttribute('src', './imagens/adulto'+gen);
    }
    else if(idade < 126){
        img.setAttribute('src', './imagens/idoso'+gen);
    }
    else {
        img.setAttribute('src', './imagens/passado.jpg');
    }
}