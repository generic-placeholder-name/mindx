//day 2 array problems

//Task 1
let a = 1;
let b = 2;

let c = a; 
a = b;
b = c;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

//Task 2
let s = "Splitting a string into an array";
a = s.split(" ");
console.log(a);

//Task 3
a = [1, 2, 3, 4]
console.log(...a)

//Task 5
a = prompt("Input string of numbers, separated by a comma")
let sum = a.split(",").map(Number).reduce((a, b) => a + b, 0);
alert(`sum of array is ${sum}`);

//Task 6
a = prompt("Input string of numbers, separated by a comma")
let min = Math.min(...a.split(",").map(Number));
alert(`min of array is ${min}`);

//Task 7
arr = [3, 4, 6, -9, 10, -88, 2];
let x = Number(prompt("Input a number: "));
let idx = arr.indexOf(x);
if (idx === -1) alert(`${x} not found`);
else alert(`${x} found at position ${idx}`);

//Task 8
arr = prompt("Input sheep sizes, separated by commas").split(",").map(Number);
while(1) {
    let status = prompt("Input 0 to stop, 1 to advance a month");
    while(status !== "0" && status !== '1') {
        alert("Unsupported operation")
        status = prompt("Input 0 to stop, 1 to advance a month");
    }
    if(status === '1') {
        arr = arr.map((x) => x + 50);
        let max = Math.max(...arr);
        let idx = arr.indexOf(max);
        arr[idx] = 8;
        alert(`Sheared sheep of size ${max}`);
        alert(`Current sizes: ${arr}`);
    }
    else {
        let sum = arr.reduce((a, b) => a + b, 0);
        alert(`Total size = ${sum}`);
        break;
    }
}