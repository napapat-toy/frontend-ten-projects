const input = document.querySelector('#input-todo')
const add = document.querySelector('#btn-add')
const todo = document.querySelector('.todo-list')

const addItem = () => {
    // console.log(input.value);
    if (input.value.length === 0) {
        alert('Enter your todo list')
    } else {
        const div = document.createElement('div')
        const li = document.createElement('li')
        const btn = document.createElement('button')
        btn.innerHTML = 'Remove'
        todo.appendChild(div)
        div.appendChild(li)
        div.appendChild(btn)
        li.innerHTML = input.value
        input.value = ''
        btn.addEventListener('click', () => {
            div.remove()
        })

    }
}

input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        addItem()
    }
})