const RES = document.getElementById("resultado");
var tdsNumeros = [];

function verifica(txtnum) {
    let confirma = tdsNumeros.indexOf(txtnum)

    if (txtnum > 0 && txtnum < 101 && confirma == -1) {
        return true;
    }
}

function adicionar() {
    const TXTNUM = document.getElementById("txtNumber");
    const LISTA = document.getElementById("lista");

    let digitado = TXTNUM.value.length > 0;
    let regra = verifica(Number(TXTNUM.value))

    if(digitado && regra) {
        RES.innerHTML = "";
        let num = Number(TXTNUM.value);

        tdsNumeros.push(num);

        let opt = document.createElement('option');
        opt.innerHTML = num;
        LISTA.appendChild(opt);

    }else RES.innerHTML = "[ERRO] Valor inválido ou Se encontra na lista !";
}

function finalizar() {
    
    let tudoOk = tdsNumeros.length > 0;
    let maior = 0; let menor = 0; let soma = 0; let media = 0; 

    if(tudoOk) {
        RES.innerHTML = "";
        for (let i = 0; i < tdsNumeros.length; i++) {

            soma = soma + tdsNumeros[i];
            let ehMaior = maior < tdsNumeros[i];
            let ehMenor = tdsNumeros[i] > menor;

            if(ehMaior) maior = tdsNumeros[i];
            else if (ehMenor) menor = tdsNumeros[i];
            else RES.innerHTML = "[ERRO]";
        }
        media = soma / tdsNumeros.length

        RES.innerHTML += `A SOMA eh ${soma}<br>`;
        RES.innerHTML += `O MAIOR : ${maior}<br>`;
        RES.innerHTML += `O MENOR : ${menor}<br>`;
        RES.innerHTML += `A MÉDIA : ${media}`;

    }else RES.innerHTML = "[ERRO]<br>Nenhum item adicionado na lista !";
}