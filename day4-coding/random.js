console.log(Math.random());

function randomInt(l, r) { //l, r is int
    return Math.floor(Math.random() * (r - l + 1)) + l;
}

let a = [1, 2, 3, 4, 5];
console.log(`Random element: ${a[randomInt(0, a.length - 1)]}`);