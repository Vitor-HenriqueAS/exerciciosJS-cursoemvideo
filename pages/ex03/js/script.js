function contar() {
    let txtInicio = Number(document.getElementById("txti").value);
    let txtFim = Number(document.getElementById("txtf").value);
    let txtPasso = Number(document.getElementById("txtp").value);
    let resultado = document.getElementById("res");

    let errado = txtFim.lenght == 0 || txtInicio.lenght == 0 || txtPasso == 0;
    var inicioMenor = txtInicio < txtFim;

    if(!errado) {
        resultado.innerHTML = "";

        if(inicioMenor) { //Crescente
            for (let c = txtInicio; c <= txtFim; c += txtPasso) {
                resultado.innerHTML += `\u{1F449} ${c} `
            }
        }
        else { //Descrescente
            for (let c = txtInicio; c >= txtFim; c -= txtPasso) {
                resultado.innerHTML += `\u{1F449} ${c} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }

    else {
        resultado.innerHTML = "Verifique os dados inseridos acima";
    }

}

