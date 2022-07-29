function entrar() {
    arrPessoa = JSON.parse(window.localStorage.getItem('n1'));
    arrUser = JSON.parse(window.localStorage.getItem('n2'));
    arrPass = JSON.parse(window.localStorage.getItem('n3'));
    let user = document.getElementById("usuario-logar").value;
    let pass = document.getElementById("senha-logar").value;
    let index;
    for (let j = 0; j < arrUser.length; j++) {
        if (arrUser[j] === user) {
            index = arrUser.indexOf(user);
        }
    }
    let verificarUser = arrUser[index];
    let verificarSenha = arrPass[index];
    if (verificarUser === user && verificarSenha === pass && user==="Admin") {
        window.location = "gerenciar.html";
        limpar();
    } else {
        alert("Usuário ou senha não correspondem!");
        document.getElementById("usuario-logar").focus();
    }
}

document.getElementById("btn-logar").addEventListener("click", entrar);

function limpar(){
   document.getElementById("usuario-logar").value = "";
   document.getElementById("senha-logar").value = "";
   document.getElementById("usuario-logar").focus();
}