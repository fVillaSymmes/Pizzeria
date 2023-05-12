const botonMartini = document.getElementById("botonMartini")
const botonCapuccino = document.getElementById("botonCapuccino")
const botonLatte = document.getElementById("botonLatte")
const botonMojito = document.getElementById("botonMojito")
const botonRiso = document.getElementById("botonRiso")
const botonCipolloti = document.getElementById("botonCipolloti")
const botonCaprese = document.getElementById("botonCaprese")

const cajonItems = document.getElementById("cajonItems")
const cajonPrecios = document.getElementById("cajonPrecios")
const cajonTotal = document.getElementById("cajonTotal")

function item(nombre, precio, seleccionada) {
    this.nombre = nombre;
    this.precio = precio;
    this.seleccionada = false;
}

const martini = new item('Martini', 2550)
const capuccino = new item('Capuccino', 1370)
const latte = new item('Latte', 1350)
const mojito = new item('Mojito', 2290)
const insalataDeRiso = new item('Insalata de Riso', 6750)
const insalataAlCipolloti = new item('Insalata al Cipolloti', 5990)
const insalataCaprese = new item('Insalata Caprese', 8250)

const menu = [
    martini,
    capuccino,
    latte,
    mojito,
    insalataDeRiso,
    insalataAlCipolloti,
    insalataCaprese
]

const botones = [
    botonMartini,
    botonCapuccino,
    botonLatte,
    botonMojito,
    botonRiso,
    botonCipolloti,
    botonCaprese
]

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("change", checarEstado)}

function checarEstado() {
    cajonItems.innerHTML = ""
    cajonPrecios.innerHTML = ""
    cajonTotal.innerHTML = ""
    let total = 0
    let orden = 0
    for (let i = 0; i < botones.length; i++) {
        (botones[i].checked) ? menu[i].seleccionada = true : menu[i].seleccionada = false
        if(menu[i].seleccionada == true) {
            cajonItems.appendChild(insertarValor(`${orden+=1}. ${menu[i].nombre}`))
            cajonPrecios.appendChild(insertarValor(`${orden}. $${menu[i].precio}`))
            total += menu[i].precio
        }
    }
    cajonTotal.appendChild(insertarValor(`$${total}`))
}

function insertarValor(name) {
    let p = document.createElement('p');
    p.textContent = name;
    p.setAttribute("class", "text-center")
    return p
}