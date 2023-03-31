import { pecas } from "./forca.js"

const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

controle.forEach( (elemento) => {

    elemento.addEventListener('click', (evento) => {
        
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        
        atualizaEstatistica(evento.target.dataset.peca, evento.target.textContent)

    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca,operacao) {
    
    estatistica.forEach( (elemento ) => {
        if(operacao == "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }else{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] 
        }
       
    })
}
//ctrl + d modifica todos os textos
