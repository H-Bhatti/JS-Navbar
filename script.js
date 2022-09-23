var navSlide = function () {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");
    if (burger != null) {
        burger.addEventListener("click", function () {
            // toggle the display of side bar
            nav === null || nav === void 0 ? void 0 : nav.classList.toggle("nav-active");
            //animation for li
            navLinks === null || navLinks === void 0 ? void 0 : navLinks.forEach(function (link, index) {
                if (link.style.animation) {
                    link.style.animation = "";
                }
                else {
                    link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.5, "s");
                }
            });
        });
    }
};
navSlide();
