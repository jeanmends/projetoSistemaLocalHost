let deslogar = document.getElementById("sair-pagina");
deslogar.addEventListener("click", function(event) {
    sessionStorage.clear();
    window.location = "index.html"
    
});
