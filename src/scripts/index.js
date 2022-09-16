import { Api } from "./api.js";
import { Toast } from "./toastify.js";
const modal = document.querySelectorAll("[data-modal-control]");
modal.forEach(elemento => {
    elemento.addEventListener("click", () => {
    const modal = document.getAttribute("data-modal-control");
    document.getElementById(value).classList.toggle('esconder-moda')
    setTimeout(() => {
        document.getElementById(value).classList.toggle('desligado')
    }, 500);
    });
});
class Index {
    static async logar() {
        const email = document.getElementById("login-email");
        const senha = document.getElementById("login-senha");
        const botao = document.getElementById("botao-entrar");
        botao.addEventListener("click", async (event) => {
            event.preventDefault();
            const body = {
                email: email.value,
                password: senha.value,
            };
            const login = await Api.logar(body);
            console.log(login);
            if (login.token) {
               if(login.is_admin){
                   window.location.assign("./src/pages/dashboard_admin.html")
               } else {
                     window.location.assign("./src/pages/dashboard_user.html")
               }
            } else {
                Toast.criarToast("Verifique suas credenciais", "rgb(200, 30, 30)");
            }
        })
    }
        static async registrar() {
            const username = document.getElementById("registro-nome");
            const email = document.getElementById("registro-email");
            const senha = document.getElementById("registro-senha");
            const botao = document.getElementById("botao-cadastrar");
            const level = document.getElementById("nivel");
            botao.addEventListener("click", async (event) => {
                event.preventDefault();
                const body = {
                    username: username.value,
                    email: email.value,
                    password: senha.value,
                    professional_level: level.value
                };
                const cadastro = await Api.cadastrar(body);
                if (cadastro.uuid) {
                   const close = document.getElementById("modal-registro")
                     close.classList.toggle('esconder-moda')
                     Toast.criarToast("Cadastro realizado com sucesso", "rgb(30, 200, 30)");
                     setTimeout(() => {
                        close.classList.toggle('desligado')
                    }, 500);

                } else {
                    Toast.criarToast("Verifique suas credenciais", "rgb(200, 30, 30)");
                }
            });

        }
}
Index.logar();
Index.registrar();
