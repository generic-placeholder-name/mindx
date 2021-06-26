let curRow = -1;
let timetable = document.getElementById("timetable");

function createDeleteButton(element) {
    let btn = document.createElement('button');
    btn.innerHTML = 'X';
    btn.onclick = function() {element.remove();};
    return btn;
}

function createUpdateButton(rowId) {
    let btn = document.createElement('button');
    btn.innerHTML = 'U';
    btn.onclick = function() {
        curRow = rowId;
        let row = timetable.rows[rowId];
        document.getElementById("project").value = row.getElementsByTagName("td")[0].innerHTML;
        document.getElementById("task").value = row.getElementsByTagName("td")[1].innerHTML;
        document.getElementById("time-spent").value = Number(row.getElementsByTagName("td")[2].innerHTML);
    };
    return btn;
}

function insertRow(id, project, task, time) {
    console.log(id);
    let row = document.createElement("tr");
    row.innerHTML += `<td> ${project} </td>`;
    row.innerHTML += `<td> ${task} </td>`;
    row.innerHTML += `<td> ${time} </td>`;
    row.appendChild(createDeleteButton(row));
    row.appendChild(createUpdateButton(curRow === -1 ? timetable.rows.length : curRow))
    if(id === -1) {
        timetable.appendChild(row);
    }
    else {
        timetable.rows[id].replaceWith(row);
    }
};

insertRow(-1, "Learn Front-end", "Learn HTML", 6);
insertRow(-1, "Learn Front-end", "Learn CSS", 8);
insertRow(-1, "Learn Front-end", "Learn JS", 6);
insertRow(-1, "Learn Git", "Learn Git Basics", 2);

const fields = ["project", "task", "time-spent"]
function clear() {
    for (field of fields) {
        document.getElementById(field).value = "";
    }
    curRow = -1;
};

let clearBtn = document.getElementById("clear");
clearBtn.onclick = function() {clear();};

let addBtn = document.getElementById("add");
addBtn.onclick = function() {
    let project = document.getElementById("project").value;
    let task = document.getElementById("task").value;
    let timeSpent = document.getElementById("time-spent").value;
    insertRow(curRow, project, task, timeSpent);
    clear();
};