const arrPessoa = [];
const arrUser = [];
const arrPass = [];
let i = 1;
arrPessoa[0] = 'Admin';
arrUser[0] = 'Admin';
arrPass[0] = '123456';
function cadastro() {
    let pessoa = document.getElementById("nome").value;
    arrPessoa[i] = pessoa;

    let user = document.getElementById("usuario").value;
    arrUser[i] = user;

    let pass = document.getElementById("senha").value;
    arrPass[i] = pass;

    i++
   
    window.localStorage.setItem("n1", JSON.stringify(arrPessoa)); // Saving
    window.localStorage.setItem("n2", JSON.stringify(arrUser)); // Saving
    window.localStorage.setItem("n3", JSON.stringify(arrPass)); // Saving
 /*
    localStorage.setItem("n1", pessoa);
    localStorage.setItem("n2", user);
    localStorage.setItem("n3", pass);
*/ 
    alert("Cadastrado com sucesso!");
}

function validar() {
    let pessoa = document.getElementById("nome").value;
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;

    console.log(pass.length);
    if (pessoa == "" || user == "" || pass == "") {
        alert("Digite todos os campos")
    } else if (pass.length < 6 || pass.length > 20) {
        alert("Respeite as regras de senha!")
    } else {

        let teste = 0;
        let user = document.getElementById("usuario").value;
        for (let j = 0; j < arrUser.length; j++) {
            if (arrUser[j] === user) {
                alert("Nome de usuário já existe!");
                teste = 1;

            }
        }
        if (teste == 0) {
            cadastro();
            teste = 0;
        } else {
            teste = 0;
        }
    }
}


document.getElementById("btn-cadastrar").addEventListener("click", validar);

function visualizar() {
    let tabela = `
    <tr>
    <td>ID</td>
    <td>Nome</td>
    <td>Login</td>
    <td>Senha</td>
    </tr>`;
    let teste = document.getElementById("visuliazar-cadastro");
    teste.style.display = 'block';

    for (let i = 0; i < arrPessoa.length; i++) {
        tabela += `<tr>
       <td>${i}</td> 
       <td>${arrPessoa[i]}</td> 
       <td>${arrUser[i]}</td>
       <td>${arrPass[i]}</td>
       </tr>
       `
    }
    teste.innerHTML = tabela;
}

document.getElementById("btn-visualizar").addEventListener("click", visualizar);

function entrar() {

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
    if (verificarUser === user && verificarSenha === pass) {
        alert("Funcionou!");
    } else {
        alert("Não funcinou!");
    }
}

document.getElementById("btn-logar").addEventListener("click", entrar);
