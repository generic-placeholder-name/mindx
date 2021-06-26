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
        document.getElementById("name").value = row.getElementsByTagName("td")[0].innerHTML;
        document.getElementById("age").value = Number(row.getElementsByTagName("td")[1].innerHTML);
        document.getElementById("salary").value = Number(row.getElementsByTagName("td")[2].innerHTML);
        document.getElementById("role").value = row.getElementsByTagName("td")[3].innerHTML;
    };
    return btn;
}

function insertRow(id, name, age, salary, role) {
    console.log(id);
    let row = document.createElement("tr");
    row.innerHTML += `<td> ${name} </td>`;
    row.innerHTML += `<td> ${age} </td>`;
    row.innerHTML += `<td> ${salary} </td>`;
    row.innerHTML += `<td> ${role} </td>`;
    row.appendChild(createDeleteButton(row));
    row.appendChild(createUpdateButton(curRow === -1 ? timetable.rows.length : curRow))
    if(id === -1) {
        timetable.appendChild(row);
    }
    else {
        timetable.rows[id].replaceWith(row);
    }
};

insertRow(-1, "Phúc Du", 69, 96, "CEO");
insertRow(-1, "Phúc Đạt Bích", 69, 69, "ehh idk");

const fields = ["name", "age", "salary", "role"];
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
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let salary = document.getElementById("salary").value;
    let role = document.getElementById("role").value;
    insertRow(curRow, name, age, salary, role);
    clear();
};