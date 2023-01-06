

var ALL = document.querySelector('#ALL');
var UI = document.querySelector('#UI');
var UX = document.querySelector('#UX');
var WEB = document.querySelector('#WEB');
var columnUI = document.querySelector(".columnUI");
var columnUX = document.querySelector(".columnUX");
var columnWEB = document.querySelector(".columnWEB");
UI.onclick = function() {
    columnUI.style.display = "block";
    columnUX.style.display = "none";
    columnWEB.style.display = "none";
    UI.classList.add("active");
    ALL.classList.remove("active");
    UX.classList.remove("active");
    WEB.classList.remove("active");
} 
UX.onclick = function() {
    columnUX.style.display = "block";
    columnUI.style.display = "none";
    columnWEB.style.display = "none";
    UI.classList.remove("active");
    ALL.classList.remove("active");
    UX.classList.add("active");
    WEB.classList.remove("active");
} 
WEB.onclick = function() {
    columnWEB.style.display = "block";
    columnUI.style.display = "none";
    columnUX.style.display = "none";
    UI.classList.remove("active");
    ALL.classList.remove("active");
    UX.classList.remove("active");
    WEB.classList.add("active");
} 
ALL.onclick = function() {
    columnUI.style.display = "block";
    columnUX.style.display = "block";
    columnWEB.style.display = "block";
    UI.classList.remove("active");
    ALL.classList.add("active");
    UX.classList.remove("active");
    WEB.classList.remove("active");
}




