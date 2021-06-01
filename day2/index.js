//day 2 problems

//Task 3
//3a
for (let i = 0; i < 7; i++) {
    console.log(i);
}

//3b
for(let i = 0, n = Number(prompt("Input number: ")); i < n; i++) {
    console.log(i)
}

//3c
for(let i = 3, n = Number(prompt("Input number: ")); i < n; i++) {
    console.log(i)
}

//3d
for(let i = Number(prompt("start = ")), n = Number(prompt("stop = ")); i < n; i++) {
    console.log(i)
}

//3e
for(let i = Number(prompt("start = ")), n = Number(prompt("stop = ")); i < n; i += 3) {
    console.log(i)
}

//3f
for(let i = Number(prompt("start = ")), n = Number(prompt("stop = ")), s = Number(prompt("step = ")); i < n; i += s) {
    console.log(i)
}

//Task 4
function fact(n) {
    return n ? fact(n - 1) * n : 1;
}

let n = Number(prompt("Input number: "));
alert(`The factorial of ${n} is ${fact(n)}`);

//Task 5
let age = Number(prompt("How old are you?"));
if (age < 14) alert("You are not old enough to view this content.");
else alert("ok");

//Task 6
let x = Number(prompt("Input number: "));
if (x < 5) alert("Lower half of 9");
else alert("Higher half of 9");

//Task 7
x = Number(prompt("Input number: "));
n = Number(prompt("Input number: "));
if (x < n / 2) alert(`Lower half of ${n}`);
else alert(`Higher half of ${n}`);

//Task 8
n = Number(prompt("Input number: "));
if (n & 1) alert(`${n} is odd`);
else alert(`${n} is even`);

//Task 9
//9a
for (let i = 0; i < 6; i++) {
    console.log(i < 3 ? "L" : "H");
}

//9b
for (let i = 0, n = Number(prompt("Input number: ")); i < 6; i++) {
    console.log(i < 3 ? "L" : "H");
}

//9c
for (let i = 0; i < 8; i++) {
    console.log(i & 1);
}

//9d
for (let i = 0, n = Number(prompt("Input number: ")); i < 6; i++) {
    console.log(i & 1);
}

//Task 10
let w = Number("Your weight in kg: ");
let h = Number("Your height in cm: ") / 100;
let BMI = w / (h * h);
alert(`Your BMI is ${BMI}`);
if (BMI < 16) alert("You are severely underweight");
else if (BMI < 18.5) alert("You are underweight");
else if (BMI <= 25) alert("You are normal");
else if (BMI <= 30) alert("You are overweight");
else alert("You are severely overweight");

