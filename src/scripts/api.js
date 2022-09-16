import { Toastify } from "./toastify.js";
export class Api {
    static token = localStorage.getItem("@kenzieCorp:token");
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Api.token}`,
    };
    static async logar(body){
        const login = await fetch('http://localhost:6278/auth/login', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: this.headers
        })
        .then(resp => resp.json())
        .then(resp => {
            localStorage.setItem('@kenzieCorp:token', resp.token)
            localStorage.setItem('@kenzieCorp:uuid', resp.uuid)
            return resp
        })
        .catch(err => console.log(err))
        return login
    }
    static async cadastrar(body){
        const cadastro = await fetch ('http://localhost:6278/auth/register/user', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: this.headers
        })
        .then(resp => resp.json())
        .then(resp => {
            if(resp.error){
                Toastify.criarToast(resp.error, 'rgb(200, 30, 30)')
            }
            return resp
        })
        .catch(err => console.log(err))
        return cadastro
    }
    static async listarEmpresas(){
        const lista = await fetch ('http://localhost:6278/companies', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return lista
    }
    static async listarDepartamentos(id){
        const lista = await fetch (`http://localhost:6278/departments/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return lista
    }
    static async criarDepartamento(body) {
        const adicionado = await fetch ('http://localhost:6278/departments', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return adicionado
    }
    static async deletarDepartamento(id) {
        const deletado = await fetch (`http://localhost:6278/departments/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return deletado
    }
    static async listarTodosUsuarios(){
        const lista = await fetch ('http://localhost:6278/users', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return lista
    }
    static async contratar(body) {
        const contradado = await fetch ('http://localhost:6278/departments/hire', {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return contradado
    }
    static async demitir(id) {
        const demitido = await fetch (`http://localhost:6278/departments/dismiss/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return demitido
    }
    static async listarSetores(){
        const lista = await fetch ('http://localhost:6278/sectors', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return lista
    }
    static async criarEmpresa(body) {
        const adicionado = await fetch ('http://localhost:6278/companies', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return adicionado
    }
    static async atualizarUsuario(id, body) {
        const atualizado = await fetch (`http://localhost:6278/admin/update_user/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
       if(atualizado.uuid) {
        Toastify.criarToast("Atualizado com sucesso!", 'rgb(30, 200, 30)')
            setTimetout(() => {
                document.location.reload(true)
            }, 2500)
           
        } else {
            Toastify.criarToast(atualizado.error, 'rgb(200, 30, 30)')
        }
        return atualizado
    }
    static async listarMeusDepartamentos(){
        const lista = await fetch ('http://localhost:6278/users/departments', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return lista
    }
    static async meuPerfil(){
        const perfil = await fetch ('http://localhost:6278/users/profile', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            return resp
        })
        .catch(err => console.log(err))
        return perfil
    }
    static async atualizarMeuPerfil(body) {
        const atualizado = await fetch ('http://localhost:6278/users', {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            Toastify.criarToast("Atualizado com sucesso", 'rgb(30, 200, 30)')
            setTimeout(() => {
                document.location.reload(true)
            }, 2500);
            return resp
        })
        .catch(err => {
            Toastify.criarToast(err, 'rgb(200, 30, 30)')
            console.log(err)
        })
        return atualizado
    }
}


