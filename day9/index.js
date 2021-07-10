let items = document.getElementById("items");

async function load() {
    const conn = await fetch("https://pokeapi.co/api/v2/pokemon/psyduck/");
    const data = await conn.json();
    data.moves.forEach((x) => {items.innerHTML += `<li> ${x.move.name} </li>`;});
}

load();