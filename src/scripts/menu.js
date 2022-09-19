import { Api } from "./api.js";
const botaoModal = document.querySelectorAll("[data-modal-control]")
botaoModal.forEach(element => {
    element.addEventListener('click', event => {
        let value = element.getAttribute("data-modal-control")
        document.getElementById(value).classList.remove('desligado')
        document.getElementById(value).classList.remove('esconder-modal')
    })
});
const botaoCloseModal = document.querySelectorAll("[data-close-control]")
botaoCloseModal.forEach(element => {
    element.addEventListener('click', event => {

        let value2 = element.getAttribute("data-close-control")
        document.getElementById(value2).classList.toggle('esconder-modal')

        setTimeout(() => {
            document.getElementById(value2).classList.toggle('desligado')
        }, 1000);
    })
});