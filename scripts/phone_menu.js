"use strict";
function openMenu(){
    var menuStatus = document.querySelector("header>nav");
    var icon = document.querySelector("button>i");
    if (menuStatus.style.display != "flex"){
        menuStatus.style.display = "flex";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times-circle");
    }else{
        menuStatus.style.display = "none";
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times-circle");
    }
}