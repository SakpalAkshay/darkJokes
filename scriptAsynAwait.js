const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");


//EventListerners
generateJoke()
jokeBtn.addEventListener('click',generateJoke)






async function generateJoke(){
    const res = await fetch("https://v2.jokeapi.dev/joke/Dark?type=single");
    const data = await res.json();
    jokeElement.innerHTML = data.joke;
}
