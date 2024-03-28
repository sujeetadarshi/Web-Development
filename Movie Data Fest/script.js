const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector(".movieList")
const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data)
}
getMovies(APIURL);


const showMovies = (data) => {
    moiveBox.innerHTML = "";
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "assests/image-missing.png" : IMGPATH + result.poster_path;
            const box = document.createElement("div")
            box.classList.add("card")
            box.innerHTML = `     
                    <div class="poster">
                        <img src="${imagePath}" alt="">
                    </div>
                    <div class="desc">
                        <div class="heading">
                            <div class="title">
                                <h2>${result.original_title}</h2>
                            </div>
                            <div class="rating">
                                <h3>${result.vote_average} </h3>
                            </div>
                        </div>
                        <div class="overview">
                            <h4>Overview</h4>
                             ${result.overview}
                        </div>
                 
                </div>
            `
            moiveBox.appendChild(box)
        }
    )
}

document.querySelector("input").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            console.log(event.key)
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL);
        }
    }
)