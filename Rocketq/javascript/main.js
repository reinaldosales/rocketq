import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//Pegar quando o marcar como lido for clicado
const checkButtons = document.querySelectorAll("a.check");

checkButtons.forEach(button => {
    //Adicionar a escuta
    button.addEventListener("click", event => {
        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Tem certeza que deseja marcar como lida?"
        modalButton.innerHTML = "Sim, marcar"

        modal.open()
    })
})


const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach( button => {
    button.addEventListener("click", event => {
        modalTitle.innerHTML = "Excluir essa pergunta"
        modalDescription.innerHTML = "Tem certeza que deseja excluir?"
        modalButton.innerHTML = "Sim, desejo excluir"

        modal.open()
    })
})