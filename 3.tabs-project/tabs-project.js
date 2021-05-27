const allBtn = document.querySelector('.buttons #all')
const natureBtn = document.querySelector('.buttons #nature')
const carsBtn = document.querySelector('.buttons #cars')
const allImg = document.querySelectorAll('.image img')
const modal = document.querySelector('.modal')

allBtn.addEventListener('click', () => {
    // console.log(allBtn);
    allImg.forEach(img => {
        img.style.display = 'flex'
    })
})
natureBtn.addEventListener('click', () => {
    // console.log(natureBtn);
    allImg.forEach(img => {
        if (img.className !== 'nature') {
            img.style.display = 'none'
        }else{
            img.style.display = 'flex'
        }
    })
})
carsBtn.addEventListener('click', () => {
    // console.log(carsBtn);
    allImg.forEach(img => {
        if (img.className !== 'cars') {
            img.style.display = 'none'
        }else{
            img.style.display = 'flex'
        }
    })
})

allImg.forEach(img => {
    img.addEventListener('click', (e) => {
        console.log(e);
        var clickedImg = e.target
        modal.style.display = 'flex'
        const modalImg = document.querySelector('.modal img')
        modalImg.src = clickedImg.src
    })
})

const closeBtn = document.querySelector('.modal #close')
closeBtn.addEventListener('click',()=>{
    modal.style.display = 'none'
})