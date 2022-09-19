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
class Menu {
    static async filtrarDepartamento() {
        const selectEmpresa = document.getElementById('filtrar-parceiro');
        const lista = await Api.listarEmpresas();
        lista.forEach(element => {
            const option = document.createElement('option');
            option.innerText = `${element.name} -  ${element.sectors.description}`;
            option.value = element.uuid;
            selectEmpresa.append(option);
        });
        const selectDepartamento = document.getElementById('filtrar-departamento');
        selectEmpresa.addEventListener('click', async (event) => {
            selectDepartamento.innerText = ''
            const lista = await Api.listarDepartamentos(event.target.value)
            lista.forEach(element => {
                const optionDepartmento = document.createElement('option');
                optionDepartmento.innerText = element.name;
                optionDepartmento.value = element.uuid;
                selectDepartamento.append(optionDepartmento);
            });
        })
        const botaoFiltro = document.querySelector('.botao-filtro');
        botaoFiltro.addEventListener('click', async (event) => {
            const lista = await Api.listarDepartamentos(selectEmpresa.value);
            const filtro = lista.filter(element => {
                if (element.uuid == selectDepartamento.value) {
                    return element
                }
            });
            const nomeDepartamento = document.getElementById('nome-departamento')
            const id = document.getElementById('id')
            const descricao = document.getElementById('descricao')
            const nomeEmpresa = document.getElementById('nome-empresa')
            nomeDepartamento.innerText = filtro[0].name
            id.innerText = filtro[0].uuid
            descricao.innerText = filtro[0].description
            nomeEmpresa.innerText = filtro[0].companies.name
        })
    }
}
Menu.filtrarDepartamento();
