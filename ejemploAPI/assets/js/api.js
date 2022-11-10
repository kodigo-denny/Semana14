

function cargar(){
    const num = document.querySelector("#num");


    let url = 'https://pokeapi.co/api/v2/pokemon/'+num.value;

    fetch(url)
        .then(r => r.json())
        .then(j => {
            console.log(j.sprites);
            const imagen = document.querySelector("#imagen");
            imagen.src = j.sprites.front_default
        })
}