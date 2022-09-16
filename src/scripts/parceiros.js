import { Api } from "../scripts/api.js";
const lista = document.querySelector('ul')
class Parceiro {
    static async listar(){
        const resultado = await Api.listarEmpresas()
        resultado.forEach(empresa => {
            const card = Parceiro.criarCard(empresa)
            lista.append(card)
        });
    }
    static criarCard(empresa){
        const li = document.createElement('li')
        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const tipo = document.createElement('p')
        const descricao = document.createElement('p')
        const horas = document.createElement('p')
        const img = document.createElement('img')
        h3.innerText = empresa.name
        tipo.innerText = empresa.sectors.description
        descricao.innerText = empresa.description
        horas.innerText = empresa.opening_hours
        img.src = "/src/assets/companhia.png";
        img.alt = "icon";
        div.append(h3, tipo, descricao, horas)
        li.append(div, img)
        return li
    }
    static async filtrar(){
        const btn = document.querySelector('input');
        btn.addEventListener('click', async (event) => {
            event.preventDefault();
            const filtro = document.querySelector('select').value;
            const resultado = await Api.listarEmpresas();
            if(resultado[0]){
                const filtrado = resultado.filter(empresa => empresa.sectors.description === filtro)
                lista.innerHTML = ''
                await filtrado.forEach(empresa => {
                    const card = Parceiro.criarCard(empresa)
                    lista.append(card)
                });
            }
        })
    }  
  
}
Parceiro.listar();
Parceiro.filtrar();

