let arrTarefa = [];
let arrData = [];
arrTarefa[0] = "Primeira tarefa";
//window.localStorage.setItem("t1", JSON.stringify(arrTarefa)); // Saving
function cadastrarTarefa() {

    arrTarefa = JSON.parse(window.localStorage.getItem('t1'));

    let tarefa = document.getElementById("nv-tarefa").value;
    arrTarefa.push(tarefa);
       // i++
    
    window.localStorage.setItem("t1", JSON.stringify(arrTarefa)); // Saving
    /*
    window.localStorage.setItem("n2", JSON.stringify(arrUser)); // Saving
    window.localStorage.setItem("n3", JSON.stringify(arrPass)); // Saving
    window.localStorage.setItem("n4", JSON.stringify(arrTipo)); // Saving
 
    localStorage.setItem("n1", pessoa);
    localStorage.setItem("n2", user);
    localStorage.setItem("n3", pass);
*/ 
    alert("Cadastrado com sucesso!");
    visualizarTarefas();
    limpar();
}

function validar() {
    let tarefa = document.getElementById("nv-tarefa").value;
   if (tarefa===""){
    alert("Digite uma tarefa!");
   }else{
    cadastrarTarefa();
   }
}

function limpar(){
    document.getElementById("nv-tarefa").value = "";
    document.getElementById("nv-tarefa").focus();
}
document.getElementById("btn-nova-tarefa").addEventListener("click", validar);

function visualizarTarefas(){
    arrTarefa = JSON.parse(window.localStorage.getItem('t1'));

    let tabela = `
    <tr>
    <td>ID</td>
    <td>Tarefa</td>
    <td colspan="3" align="center   ">Ações</td>
    </tr>`;
    let tabelaTarefas = document.getElementById("visuliazar-tarefa");
    tabelaTarefas.style.display = 'block';
    
    for (let i = 0; i < arrTarefa.length; i++) {
        tabela += `<tr>
        <td>${i}</td> 
        <td class="alterar-terefa"><input type="type" value="${arrTarefa[i]}" class="texto-tabela"></td> 
        <td class="excluir com-click">&#10060</td>
        <td class="alterar com-click">&#9998</td>
        <td class="pronto">Pronto</td>
       </tr>
       `
    }
    tabelaTarefas.innerHTML = tabela;

}

document.addEventListener("DOMContentLoaded", function(event) {
visualizarTarefas();
});


//alterar tarefa

document.body.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('alterar')) {

       let z = evt.target.parentNode.rowIndex;
       let index = z;
       let teste = document.querySelectorAll("input");
      // let one = document.querySelector("input");
            for (let u = 1; u < teste.length; u++){
               teste[u].style.background = 'none';
               teste[index].style.backgroundColor = 'white';
               teste[index].focus();
               teste[index].select();

            }
            let btnAlterarTarefa = document.getElementById("salvar-alterar-tarefa");
            btnAlterarTarefa.style.display = 'block';
            btnAlterarTarefa.addEventListener('click', function () {
                
                    arrTarefa = JSON.parse(window.localStorage.getItem('t1'));
                    arrTarefa[index - 1] = teste[index].value;
                    window.localStorage.setItem("t1", JSON.stringify(arrTarefa)); // Saving
                    alert("Alterado com sucesso!")
                    teste[index].style.background = 'none';
                    btnAlterarTarefa.style.display = 'none';
                    window.location.reload();
            });

    }
}, false);

