function f() {
    let x = prompt("input date (dd/mm/yyyy):");
    let p = x.split('/');
    if(p.length != 3 || isNaN(Date.parse(p[2] + "-" + p[1] + "-" + p[0]))) {
        alert("bad date");
    }
    else {
        let today = new Date(Date.UTC(p[2], p[1] - 1, p[0]));
        let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
        alert(`tomorrow is ${tomorrow.toJSON().slice(0, 10).split('-').reverse().join('/')}`); // formatting hack
    }
}

document.getElementById("func").onclick = f;