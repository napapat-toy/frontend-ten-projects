const apiUrl = 'https://api.github.com/users/'
const search = document.querySelector('#search')
const form = document.querySelector('form')
const main = document.querySelector('main')

const searchProfile = url => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const img = document.createElement('img')
            const h2 = document.createElement('h2')
            const h3 = document.createElement('h3')
            const p = document.createElement('p')

            main.appendChild(img)
            main.appendChild(h2)
            main.appendChild(h3)
            main.appendChild(p)

            img.src = data.avatar_url
            h2.innerHTML = `Login : <a href="${data.html_url}" target="_blank">${data.login}</a>`
            h3.innerHTML = `Name : ${data.name}`
            p.innerHTML = `Bio : ${data.bio}`
        })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    main.innerHTML = ''

    const searchTerm = search.value
    if (searchTerm) {
        searchProfile(apiUrl + searchTerm)
        search.value = ''
    }

})
