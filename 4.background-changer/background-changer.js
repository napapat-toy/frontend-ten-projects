const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const colorBtn = document.querySelector('#change-color')

colorBtn.addEventListener('click', () => {
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    let colorValue = `rgb(${random1},${random2},${random3})`
    body.style.background = colorValue
    h1.innerHTML = colorValue
})