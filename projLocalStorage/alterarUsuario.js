document.addEventListener("DOMContentLoaded", function(event) {
       let person = window.localStorage.getItem('m1');
       let user = window.localStorage.getItem('m2');
       let pass = window.localStorage.getItem('m3');
       let type = window.localStorage.getItem('m4');
       let posicao = window.localStorage.getItem('m5');

       arrPessoa = JSON.parse(window.localStorage.getItem('n1'));
       arrUser = JSON.parse(window.localStorage.getItem('n2'));
       arrPass = JSON.parse(window.localStorage.getItem('n3'));
       arrTipo = JSON.parse(window.localStorage.getItem('n4'));
       

       document.getElementById("nome3").value = person;
       document.getElementById("usuario3").value = user;
       document.getElementById("senha3").value = pass;
       document.getElementById("tipoUsuario3").value = type;
            const botao = document.getElementById("btn-atualizar");
            
            botao.addEventListener('click', function() {
                let nome = document.getElementById("nome3").value;
                let usuario = document.getElementById("usuario3").value;
                let senha = document.getElementById("senha3").value;
                if(nome === "" || usuario=== "" || senha === ""){
                    alert("Digite todo os campos parar atualizar o cadastraro!")
                }else{
                    let teste = 0;
                    for (let j = 0; j < arrUser.length; j++){
                        if (arrUser[j]===usuario && usuario != arrUser[posicao]){
                            alert("Nome de usuário já existe");
                            teste = 1;
                            }
                        }

                        if (teste == 0) {
                            let nomeAlterar = document.getElementById("nome3").value;
                            let usuarioAlterar = document.getElementById("usuario3").value;
                            let senhaAlterar = document.getElementById("senha3").value;
                            let tipoAlterar = document.getElementById("tipoUsuario3").value;
                                arrPessoa[posicao] = nomeAlterar;
                                arrUser[posicao] = usuarioAlterar;
                                arrPass[posicao] = senhaAlterar;
                                arrTipo[posicao] = tipoAlterar;
                                 
                            //salvando para o array princiap/localstorage/"banco de dados"    
                            window.localStorage.setItem("n1", JSON.stringify(arrPessoa)); // Saving
                            window.localStorage.setItem("n2", JSON.stringify(arrUser)); // Saving
                            window.localStorage.setItem("n3", JSON.stringify(arrPass)); // Saving
                            window.localStorage.setItem("n4", JSON.stringify(arrTipo)); // Saving
                            
                            window.localStorage.setItem("m1", nomeAlterar); // Saving
                            window.localStorage.setItem("m2", usuarioAlterar); // Saving
                            window.localStorage.setItem("m3", senhaAlterar); // Saving
                            window.localStorage.setItem("m4", tipoAlterar); // Saving
                            window.localStorage.setItem("m5", posicao); // Saving

                            document.getElementById("nome3").value = "";
                            document.getElementById("usuario3").value = "";
                            document.getElementById("senha3").value = "";
                            //document.getElementById("tipoUsuario2").value = "normal";
                            
                            alert("Atualizado com sucesso!");
                            window.location = "inicio.html";
                            teste = 0;
                        } else {
                            teste = 0;
                        }
                    
                }
                

            });
        
    
});