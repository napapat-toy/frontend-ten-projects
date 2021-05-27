const textarea = document.querySelector('.text-area textarea')
const btnAdd = document.querySelector('#btn-add')
const colorInput = document.querySelector('#color')
const sizeInput = document.querySelector('#size')
const notes = document.querySelector('.notes')

//Add notes
btnAdd.addEventListener('click', (e) => {
    // console.log(textarea.value);
    if (textarea.value == '') {
        alert('Please Enter a note')
    } else {
        const box = document.createElement('div')
        box.className = 'box'
        const text = document.createElement('p')
        const closeBtn = document.createElement('button')
        notes.appendChild(box)
        box.appendChild(text)

        box.appendChild(closeBtn)
        closeBtn.innerHTML = 'X'
        closeBtn.addEventListener('click', () => {
            box.remove();
        })

        text.innerHTML = textarea.value
        text.style.color = colorInput.value
        text.style.fontSize = sizeInput.value + 'px'
        textarea.value = ''
    }
})

colorInput.addEventListener('change', () => {
    // console.log(colorInput.value);
    textarea.style.color = colorInput.value
})

sizeInput.addEventListener('change', () => {
    // console.log(sizeInput.value);
    textarea.style.fontSize = sizeInput.value + 'px'
})