const elements = document.querySelectorAll('.element')

elements.forEach(element => {
    let btn = element.querySelector('.question button')
    let icon = element.querySelector('.question button i')
    var answer = element.lastElementChild
    var answers = document.querySelectorAll('.element .answer')
    btn.addEventListener('click', () => {
        answer.classList.toggle('hideText')
        icon.className === 'fas fa-plus-circle' ? icon.className = 'fas fa-minus-circle' : icon.className = 'fas fa-plus-circle'
    })
});