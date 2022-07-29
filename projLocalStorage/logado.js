document.addEventListener("DOMContentLoaded", function(event) {
    let log = window.sessionStorage.getItem('m1');
        if (log === null){
            document.write(`
            <center>
            Você não tem acesso a essa página<br>
            <a href="index.html">Página inicial</a>
            </center>`);
        }else{
            document.getElementById("pessoa-logado").innerHTML = log;
        }
    
});
