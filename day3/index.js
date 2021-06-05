//day 3 class problem

var Ronaldo = {
    name: "Cristiano Ronaldo",
    birthYear: 1985,
    nationality: "Portuguese"
}

while(1) {
    let msg = prompt("press A to add a property, D to delete a properties, E to edit a property, V to view properties, or N to stop.")
    if(msg == 'N') {
        break;
    }
    else if(msg == 'A') {
        let prop = prompt("input desired property: ");
        if (Ronaldo[prop] !== undefined) {
            alert("Property already exists");
        }
        else {
            let val = prompt("input value");
            Ronaldo[prop] = val;
            alert("done");
        }
    }
    else if(msg == 'D') {
        let prop = prompt("input desired property: ");
        if (Ronaldo[prop] === undefined) {
            alert("Property doesn't exist");
        }
        else {
            delete Ronaldo[prop];
            alert("done");
        }
    }
    else if(msg == 'E') {
        let prop = prompt("input desired property: ");
        if (Ronaldo[prop] === undefined) {
            alert("Property doesn't exist");
        }
        else {
            let val = prompt("input value");
            Ronaldo[prop] = val;
            alert("done");
        }
    }
    else if(msg == 'V') {
        console.log(Ronaldo);
    }
    else {
        alert("incorrect input, try again");
    }
}