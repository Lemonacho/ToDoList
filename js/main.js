let button1 = document.querySelector("#btn1")
let button2 = document.querySelector("#btn2")

button1.addEventListener("click", function () {
    let listItem = document.createElement("li")
    listItem.innerHTML = input.value
    list.appendChild(listItem)
    input.value = ""
})

button2.addEventListener("click", function () {
    let lastItem = list.lastChild;  
    if (lastItem) {
        lastItem.remove();
    }
})


var userName = prompt("Пожалуйста, введите ваше имя:");
var helloElement = document.querySelector("#Hello");
if (userName != null && userName != "") {
    helloElement.textContent = "Приветствую, " + userName + " 💗";
} else {
    helloElement.textContent = "Приветствую, гость 💗";
}

let violet = document.querySelector("#Violet")
let gold = document.querySelector("#Gold")
let khaki = document.querySelector("#Khaki")
let tomato = document.querySelector("#Tomato")
let aqua = document.querySelector("#Aqua")
let salmon = document.querySelector("#Salmon")
let steelblue = document.querySelector("#SteelBlue")
let darkolivegreen = document.querySelector("#DarkOliveGreen")
let indigo = document.querySelector("#Indigo")
let chocolate = document.querySelector("#Chocolate")

violet.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#ee82ee"
})  

gold.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#FFD700"
})  

khaki.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#F0E68C"
})  

tomato.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#FF6347"
})  

aqua.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#02cd97"
})  

salmon.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#FA8072"
})  

steelblue.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#4682B4"
})  

darkolivegreen.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#556B2F"
})  

indigo.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#4B0082"
})  

chocolate.addEventListener("click", function () {
    let listItem = document.querySelector("#list")
    listItem.style.color = "#D2691E"
})  