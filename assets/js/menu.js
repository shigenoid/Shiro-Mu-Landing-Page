let foodHeading = document.getElementById('heading-img')
let foodName = document.getElementById('title')
let price = document.getElementById('price_cont')
let discountPrice = document.getElementById('discount_price_cont')
let addToCart = document.getElementById('cartHeading')

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
    ele.addEventListener('click', () => {
        foodHeading.src = ele.getElementsByTagName('img')[0].src
        foodName.innerText = ele.getElementsByTagName('h4')[0].innerText
        let temporaryPrice = ele.getElementsByTagName('p')[0].innerText
        price.innerText = temporaryPrice.slice(0, 5) + ".999";
        addToCart.onclick = ele.getElementsByTagName('button')[0].onclick
    })
})
