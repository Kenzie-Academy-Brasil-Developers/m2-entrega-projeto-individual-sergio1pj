import { Api } from "./api.js";
const botaoModal = document.querySelectorAll("[data-modal-control]")
botaoModal.forEach(element => {
    element.addEventListener('click', event => {
        const valor = element.getAttribute("data-modal-control")
        document.getElementById(valor).classList.remove('desligado')
        document.getElementById(valor).classList.remove('esconder-modal')
    })
});
const botaoCloseModal = document.querySelectorAll("[data-close-control]")
botaoCloseModal.forEach(element => {
    element.addEventListener('click', event => {
        const valor = element.getAttribute("data-close-control")
        document.getElementById(valor).classList.toggle('esconder-modal')
        setTimeout(() => {
            document.getElementById(valor).classList.toggle('desligado')
        }, 1000);
    })
});
