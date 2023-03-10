    let menu = document.getElementById("menu")

    window.addEventListener("scroll",function(){
        if(this.document.documentElement.scrollTop >100){  // REGRESA UNA MEDIDA RELATIVA CON EL TOPE DEL DOCUMENT
            menu.classList.add("menuSecundario")
            menu.classList.remove("menuPrincipal")

        }else{
            menu.classList.remove("menuSecundario")
            menu.classList.add("menuPrincipal")
        }
    })