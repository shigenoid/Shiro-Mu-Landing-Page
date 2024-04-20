let cart = document.getElementById('cart')
let item = document.getElementById('foodItem')
let foodNameCard = document.getElementById('foodName')
let foodPrice = document.getElementById('total-price')
let foodImage = document.getElementById('food-img')
let i = 0
cart.style.display = "none"


function showCart() {
    if (cart.style.display === "none") {
        cart.style.display = "block"
        document.body.style.overflow = "hidden"
    } else {
        cart.style.display = "none"
        document.body.style.overflow = "auto"
    }
}

function addRamen() {
    let clone = item.cloneNode(true); // "deep" clone
    foodNameCard.innerText = "Ramen-Mu"
    foodPrice.innerText = "Rp 59.999"
    foodImage.src = document.getElementsByClassName('menu-img')[0].src

    clone.id = "foodItem" + ++i;
    item.parentNode.appendChild(clone);
    
}
function addWagashi() {
    let clone = item.cloneNode(true); // "deep" clone
    foodNameCard.innerText = "Wagashi"
    foodPrice.innerText = "Rp 39.999"
    foodImage.src = document.getElementsByClassName('menu-img')[1].src

    clone.id = "foodItem" + ++i;
    item.parentNode.appendChild(clone);
}
function addDimsum() {
    let clone = item.cloneNode(true); // "deep" clone
    foodNameCard.innerText = "Dimsum"
    foodPrice.innerText = "Rp 29.999"
    foodImage.src = document.getElementsByClassName('menu-img')[2].src

    clone.id = "foodItem" + ++i;
    item.parentNode.appendChild(clone);
    
}
function addKaremu() {
    let clone = item.cloneNode(true); // "deep" clone
    foodNameCard.innerText = "Kare-Mu"
    foodPrice.innerText = "Rp 64.999"
    foodImage.src = document.getElementsByClassName('menu-img')[3].src

    clone.id = "foodItem" + ++i;
    item.parentNode.appendChild(clone);
}
function addDonburi() {
    let clone = item.cloneNode(true); // "deep" clone
    foodNameCard.innerText = "Donburi"
    foodPrice.innerText = "Rp 69.999"
    foodImage.src = document.getElementsByClassName('menu-img')[4].src

    clone.id = "foodItem" + ++i;
    item.parentNode.appendChild(clone);
}
function addWonsum() {
    let clone = item.cloneNode(true); // "deep" clone
    foodNameCard.innerText = "Won-Sum"
    foodPrice.innerText = "Rp 21.999"
    foodImage.src = document.getElementsByClassName('menu-img')[5].src

    clone.id = "foodItem" + ++i;
    item.parentNode.appendChild(clone);
}