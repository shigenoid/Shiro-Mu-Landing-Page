let left = document.getElementsByClassName('caret-leftbtn')[0]
let right = document.getElementsByClassName('caret-rightbtn')[0]
let cards = document.getElementsByClassName('cards')[0]

function leftScroll() {
    cards.scrollLeft -= 170
}

function rightScroll() {
    cards.scrollLeft += 170
}