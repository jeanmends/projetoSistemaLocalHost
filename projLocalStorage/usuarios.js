document.addEventListener("DOMContentLoaded", function(event) {
    arrPessoa = JSON.parse(window.localStorage.getItem('n1'));
    arrUser = JSON.parse(window.localStorage.getItem('n2'));
    arrPass = JSON.parse(window.localStorage.getItem('n3'));
    //let i = 1;
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
});