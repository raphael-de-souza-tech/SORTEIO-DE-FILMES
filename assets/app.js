const apiKey = "adae70eec7e1e31d2c59026335e9d7ff";
const btn = document.getElementById('sorteio-btn');

btn.addEventListener("click", buscarFilme);

function buscarFilme(){

    const filme = document.getElementById("searchInput").value;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filme}&language=pt-BR`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        const filmes = data.results;

        if (filmes.length > 0){

            const filmeSorteado = filmes[Math.floor(Math.random() * filmes.length)];

            exibirFilme(filmeSorteado);

        } else {

            alert("Nenhum filme encontrado");

        }

    })
    .catch(error => console.error("Erro:", error));
}

function exibirFilme(filme){

    const div = document.getElementById("results");

    div.innerHTML = `
        <div>
            <img class="poster" src="https://image.tmdb.org/t/p/w500${filme.poster_path}">
            <h2 class="title">${filme.title}</h2>
            <p class="overview">${filme.overview}</p>
        </div>
    `;
}


