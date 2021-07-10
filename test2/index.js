var allStudents = [];
var curStudents = [];
var characters = document.getElementById("characters");

function createElement(student, parity) {
    let elem = document.createElement('div');
    if(parity === 0) elem.classList.add('character', 'character--left');
    else elem.classList.add('character', 'character--right');
    elem.innerHTML += `\
                    <div class = "character__info">\
                        <div class = "character__name"> ${student.name} </div>\
                        <div class = "character__detail">House: ${student.house === "" ? "None" : student.house} </div>\
                    </div>\
                    <div class = "character__photo"><img src = ${student.image}></div>`;
    let box = document.createElement('div');
    box.classList.add('character-box');
    box.appendChild(elem);
    return box;
}

function loadCurStudents() {
    characters.innerHTML = '';
    for (let i = 0; i < curStudents.length; i++) {
        characters.appendChild(createElement(curStudents[i], i & 1));
    }
}

async function initStudents() {
    const conn = await fetch("http://tobitheme.net/api/characters.json");
    const data = await conn.json();
    allStudents = data.data;
    console.log(allStudents);
    curStudents = allStudents;
    loadCurStudents();
}

initStudents();

function searchStudents(name) {
    curStudents = []
    for(const student of allStudents) {
        if(student.name.toLowerCase().includes(name.toLowerCase())) {
            curStudents.push(student);
        }
    }
}

var searchBar = document.getElementById("search-bar");

searchBar.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        searchStudents(searchBar.value);
        loadCurStudents();
    }
});