const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatisticas]");

controle.forEach((elemento)=>{
    elemento.addEventListener("click", (elemento) => {
        dados(elemento.target.dataset.controle, elemento.target.parentNode);
        atualizaDados(elemento.target.dataset.peca)
        
   })
})
   
function dados(operacao,controle) {
    const pecas = controle.querySelector("[data-contador]")
    if(operacao === "+") {
        pecas.value = parseInt(pecas.value) +1;
    }else{
        pecas.value = parseInt(pecas.value) -1;
    }
}

function atualizaDados(parte) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + partesRobo[parte][elemento.dataset.estatisticas]
    })
   
}

const partesRobo = {
    "bracos": {
        "forca": 10,
        "poder": 10,
        "energia": 00,
        "velocidade": -20
    },

    "blindagem": {
        "forca": 20,
        "poder": 20,
        "energia": -10,
        "velocidade": -10
    },
    "nucleos":{
        "forca": -10,
        "poder": 10,
        "energia": 30,
        "velocidade": 20
    },
    "pernas":{
        "forca": 10,
        "poder": 10,
        "energia": 00,
        "velocidade": 20
    },
    "foguetes":{
        "forca": 0,
        "poder": -10,
        "energia": -10,
        "velocidade": 40
    }
}