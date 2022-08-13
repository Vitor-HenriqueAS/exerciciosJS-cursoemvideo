const NUMTABUADA = document.getElementById("numTabuada");
const RES = document.getElementById("res");

NUMTABUADA.addEventListener("input", _ => {

    if (NUMTABUADA.value.length > 0) {
        NUMTABUADA.classList.remove("invalid");
        NUMTABUADA.classList.add("valid");
    }
    else {
        NUMTABUADA.classList.remove("valid");
        NUMTABUADA.classList.add("invalid");
        RES.innerHTML = "?";
    }
})

function calcular() {
    if(NUMTABUADA.value.length > 0 && Number(NUMTABUADA.value) <= 100000) {
        RES.innerHTML = "";
        var num = Number(NUMTABUADA.value);

        for (let i=0; i <= 10; i++){
            let resultado = num * i;

            if (resultado % 1 === 0)

            RES.innerHTML += `${i} X ${num} = ${resultado} <br>`;
            
            else
            RES.innerHTML += `${i} X ${num} = ${resultado.toFixed(2)} <br>`;
        }
    }
}