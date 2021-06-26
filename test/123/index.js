function reverse(a) {
    a = a.split("");
    for(let i = 0; i < a.length / 2; i++) {
        console.log(i, a);
        [a[i], a[a.length - i - 1]] = [a[a.length - i - 1], a[i]]
    }
    return a.join("");
}

function capitalizeWords(s) {
    return s.replace(/\b\w/g, l => l.toUpperCase());
}

function uniqueify(arr) {
    return Array.from(new Set(arr));
}

