//Call Element
const content = document.getElementById('content')
const form = document.getElementById('form')
const search = document.getElementById('search')

//API
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

//Fetching API and call
fetchingAPI(apiUrl)
function fetchingAPI(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data.results);
            data.results.forEach(movie => {
                // console.log(movie.title);
                //Create Elements
                const div = document.createElement('div')
                const img = document.createElement('img')
                const h2 = document.createElement('h2')

                div.classList.add('movie')
                content.appendChild(div)
                div.appendChild(img)
                div.appendChild(h2)

                const imgPath = IMGPATH + movie.poster_path
                img.src = imgPath
                h2.innerHTML = movie.title
            });
        })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    content.innerHTML = ''

    const searchTerm = search.value

    if (searchTerm) {
        fetchingAPI(SEARCHAPI + searchTerm)
        search.value = ""
    }
})