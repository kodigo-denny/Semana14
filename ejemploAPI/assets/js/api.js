let url = 'https://pokeapi.co/api/v2/pokemon/1';

fetch(url).then(r => r.json()).then(j => console.log(j.sprites))