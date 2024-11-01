let navbutton = document.getElementById("nav-hamburger");
let navmenus = document.getElementById("nav-container");

let onClickNavButton = () => {
    if (navmenus.style.display == "flex") {
        navmenus.style.display = "none";
    } else {
        navmenus.style.display = "flex";
    }
};