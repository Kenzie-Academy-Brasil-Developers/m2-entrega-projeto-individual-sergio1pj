import { Api } from "./api.js";
const token = localStorage.getItem("@kenzieCorp:token");
if(!token){
    window.location.assign("../../index.html")
}
const listaEmpresa = document.querySelector(".lista-empresa")
class Admin {
    static async listarParceiros(){
        const lista = await Api.listarEmpresas();
        lista.forEach(element => {
            const card = this.criarCard(element)
            
            listaEmpresa.append(card)
        });
    }
    static criarCard(empresa){
        const li = document.createElement("li")
        const figure = document.createElement("figure")
        const div = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const div2 = document.createElement("div")
        const div3 = document.createElement("div")
        const h3 = document.createElement("h3")
        const p2 = document.createElement("p")
        h3.innerText = empresa.name
        p.innerText = empresa.sectors.description
        p2.innerText = empresa.description
        img.src = "../assets/companhia.png"
        img.alt = 'icone'
        div2.classList = "description"
        li.addEventListener('click', async (event) => {
            this.openModal(empresa)
        })
        div3.append(h3, p2)
        div2.append(div3)
        div.append(img, p)
        figure.append(div)
        li.append(figure, div2)
        return li
    }
    static async openModal(empresa){
        const body = document.querySelector('body');
        const modalEmpresa = document.createElement('section');
        const modalDiv = document.createElement('div');
        const modalHeader = document.createElement('div');
        const nome = document.createElement('h2');
        const modalInfo = document.createElement('section');
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        const descricao = document.createElement('p');
        const hora = document.createElement('p');
        const tipo = document.createElement('p');
        const listaDepartamentos = document.createElement('section');
        const departamento = document.createElement('h3');
        const ul = document.createElement('ul');
        modalEmpresa.addEventListener('click', event => {
            body.removeChild(event.target);
        });
        modalEmpresa.classList = 'modal-empresa';
        modalDiv.classList = 'modal-div';
        modalHeader.classList = 'modal-header';
        modalInfo.classList = 'modal-info';
        descricao.classList = 'descricao';
        hora.classList = 'hora';
        tipo.classList = 'tipo';
        listaDepartamentos.classList = 'lista-departamentos';

        nome.innerText = empresa.name;
        h3.innerText = 'Detalhes';
        descricao.innerText = empresa.description;
        hora.innerText = empresa.opening_hours;
        tipo.innerText = empresa.sectors.description;
        departamento.innerText = 'Departamentos';

        const departments = await this.obterDepartamentos(empresa.uuid)
        span.append(hora, tipo);
        modalInfo.append(h3, div);
        modalHeader.append(nome);
        listaDepartamentos.append(departamento, departments);
        modalDiv.append(modalHeader, modalInfo, listaDepartamentos);
        section.append(modalDiv);

        body.append(modalEmpresa);
    }

    static async obterDepartamentos(id){
        const departamento = await Api.listarDepartamentos(id)
        const lista = document.createElement('ul')
            departamento.forEach(element => {
                const card = departamentar(element)
                lista.append(card)
            });
            function departamentar(element){
                const objeto = document.createElement('li')
                const title = document.createElement('h3')
                const descricao = document.createElement('p')
                title.innerText = element.name
                descricao.innerText = element.description
                objeto.append(title, descricao)
                return objeto
            }
            return lista
    }
}
Admin.listarParceiros();