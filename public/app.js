let url = "http://localhost:5000"
let darkButton = document.querySelector("#darkBtn")
let lightButton = document.querySelector("#lightBtn")
let body = document.querySelector("body")


darkButton.addEventListener("click", () => {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
    getData(url + "/dark-mode")
})

lightButton.addEventListener("click", () => {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    getData(url + "/light-mode")
})

async function getData(url){
    await fetch(url)
}