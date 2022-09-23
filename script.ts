let navSlide = () =>{
    let burger = document.querySelector(".burger") ;
    let nav = document.querySelector(".nav-links");
    let navLinks= document.querySelectorAll(".nav-links li");

    if(burger!=null)
    {
        burger.addEventListener("click", () => {
            // toggle the display of side bar
            nav?.classList.toggle("nav-active");

            //animation for li
            navLinks?.forEach((link:HTMLElement|Element, index:number) => {
                    if (link.style.animation){
                        link.style.animation="";
                    }
                    else{
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                    }
            })
        })
    }
}

navSlide()