export class Toastify {
    static criarToast(mensagem, color) {
        Toastify({
            text: mensagem,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
           style: {
                background: color,
           }
        }).showToast();
    }
}

