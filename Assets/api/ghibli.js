const baseURL="https://ghibliapi.herokuapp.com/films"


const searchTerm = document.getElementById('searchInput');
const searchForm = document.querySelector('form');
const filmButton=document.querySelector('filmButton')

const dataDisplay=document.querySelector("ul")

searchForm.addEventListener("submit",fetchResults)

function fetchResults(e){
    e.preventDefault();

    while(dataDisplay.firstChild){
        dataDisplay.removeChild(dataDisplay.firstChild);
    }

    fetch(baseURL)
    .then(response=>response.json())
    .then(json=>displayResults(json))
    .catch(pieces=>console.log(pieces));
}

function displayResults(data) {
    data.map(film => {
        let container = document.createElement('div');
        let title = document.createElement('h2');
        let director = document.createElement('p');
        let producer = document.createElement('p');
        let releaseDate = document.createElement('p');
        let rtScore = document.createElement('p');

        title.innerText = film.title;
        director.innerText = `Director: ${film.director}`;
        producer.innerText = `Producer: ${film.producer}`;
        releaseDate.innerText = `Year released: ${film.release_date}`;
        rtScore.innerText = `Rotten Tomatos Score: ${film.rt_score}`;

        container.appendChild(title);
        container.appendChild(director);
        container.appendChild(producer);
        container.appendChild(releaseDate);
        container.appendChild(rtScore);
        container.classList.add("dataContainer");
        dataDisplay.appendChild(container);
    })
}


