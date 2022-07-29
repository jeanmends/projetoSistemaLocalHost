/*let arrPessoa = [];
let arrUser = [];
let arrPass = [];

let i = 1;
arrPessoa[0] = 'Admin';
arrUser[0] = 'Admin';
arrPass[0] = '123456';
//window.localStorage.setItem("n1", JSON.stringify(arrPessoa)); // Saving
//window.localStorage.setItem("n2", JSON.stringify(arrUser)); // Saving
//window.localStorage.setItem("n3", JSON.stringify(arrPass)); // Saving

function cadastro() {
    arrPessoa = JSON.parse(window.localStorage.getItem('n1'));
    arrUser = JSON.parse(window.localStorage.getItem('n2'));
    arrPass = JSON.parse(window.localStorage.getItem('n3'));
    pessoa = document.getElementById("nome").value;
    arrPessoa.push(pessoa);

    let user = document.getElementById("usuario").value;
    arrUser.push(user);

    let pass = document.getElementById("senha").value;
    arrPass.push(pass);

    i++
   
    window.localStorage.setItem("n1", JSON.stringify(arrPessoa)); // Saving
    window.localStorage.setItem("n2", JSON.stringify(arrUser)); // Saving
    window.localStorage.setItem("n3", JSON.stringify(arrPass)); // Saving

    //localStorage.setItem("n1", pessoa);
    //localStorage.setItem("n2", user);
    //localStorage.setItem("n3", pass);

    alert("Cadastrado com sucesso!");
    limpar();
}

function validar() {
    let pessoa = document.getElementById("nome").value;
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;
   
    let arrUser2 = JSON.parse(window.localStorage.getItem('n2'));
   
    if (pessoa == "") {
        alert("Digite o nome!")
        document.getElementById("nome").focus();
    }else if (user ==""){
        alert("Digite o nome de usuário!");
        document.getElementById("usuario").focus();
    }else if(pass ==""){
        alert("Digite a senha!");
        document.getElementById("senha").focus();
    }else if (pass.length < 6 || pass.length > 20) {
        alert("Respeite as regras de senha!")
        document.getElementById("senha").focus();
    } else {

        let teste = 0;
        let user = document.getElementById("usuario").value;
        for (let j = 0; j < arrUser2.length; j++) {
            if (arrUser2[j] === user) {
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

function limpar(){
    document.getElementById("nome").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("nome").focus();
}

*/

function teste(){
    let testinho = document.getElementById("tipo").value;

    console.log(testinho);
}
document.getElementById("btn-cadastrar").addEventListener("click", teste);
//document.getElementById("btn-limpar").addEventListener("click", limpar);