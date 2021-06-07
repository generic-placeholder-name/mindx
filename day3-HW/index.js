//day 3 HW

//Task 1
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};
    
for (let x in product) {
    console.log(x);
}

for (const [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
}

//Task 2
const task = {
subject: 'Implement login feature',
createdBy: 'Hoang Ngoc Duc',
assignTo: 'Nguyen Phuong Nam',
dueDate: '2019-10-08T18:00:24+0000',
expectedHours: 0.5,
};

const {subject, assignTo, dueDate, ...rest} = task;
console.log(subject, assignTo, dueDate);

//Task 4
let dict = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
};

while(1) {
    let exit_or_not = prompt("exit or continue?");
    if(exit_or_not === 'exit') break;
    let key = prompt("input key:");
    if (dict[key] !== undefined) {
        alert(`${key}: ${dict[key]}`);
    }
    else {
        alert('word not found');
        let val = prompt("input value");
        dict[key] = val;
    }
}

//Task 5
let products = []

function addProduct(name, brand, price, color, category, providers) {
    products.push({
        name: name,
        brand: brand,
        price: price,
        color: color, 
        category: category,
        providers: providers
    })
}

addProduct('Xiaomi portable charger 20000mah', 'Xiaomi', 428, 'White', 'Charger', ['Phukienzero', 'Dientuccc']);
addProduct('VSmart Active 1', 'VSmart', 5487, 'Black', 'Phone', ['Tgdd', 'Ddghn', 'Vhstore']);
addProduct('IPhone X', 'Apple', 21490, 'Gray', 'Phone', ['Tgdd']);
addProduct('Samsung Galaxy A9', 'Samsung', 8490, 'Blue', 'Phone', ['Tgdd']);

console.clear();
for (const product of products) {
    console.log('--------------------');
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
}

while(1) {
    let exit_or_not = prompt("exit or continue?");
    if(exit_or_not === 'exit') break;
    let accessMethod = prompt("access by index, category or provider?");
    if (accessMethod === 'index') {
        console.clear();
        for (let i = 0; i < products.length; i++) {
            console.log(`#${i + 1}: ${products[i].name}`);
        }
        let idx = Number(prompt("input index: "));
        for(const [key, value] of Object.entries(products[idx - 1])) {
            console.log(`${key}: ${value}`);
        }
    }
    else if(accessMethod == 'category') {
        console.clear();
        let cat = prompt("what category?");
        for(const product of products) {
            if(product.category === cat) {
                console.log('--------------------');
                for(const [key, value] of Object.entries(product)) {
                    console.log(`${key}: ${value}`);
                }
            }
        }
    }
    else if(accessMethod == 'provider') {
        console.clear();
        let prov = prompt("what provider?");
        for(const product of products) {
            console.log(typeof(product.providers));
            if(product.providers.includes(prov)) {
                console.log('--------------------');
                for(const [key, value] of Object.entries(product)) {
                    console.log(`${key}: ${value}`);
                }
            }
        }
    }
    else {
        alert("Invalid access method");
    }
}

//Task 6
let tasks = []

function addTask(task) {
    tasks.push({
        name: task,
        completed: false
    })
}

addTask("HTML")
addTask("CSS")
addTask("JS")

while (1) {
    console.clear();
    for (i = 0; i < tasks.length; i++) {
        console.log(`${i}. ${tasks[i].name}`);
        console.log(`   completed: ${tasks[i].completed}`);
    }
    let cmd = prompt("command: (new, edit, complete, delete, exit)");
    if (cmd === 'new') {
        let name = prompt("input new task");
        addTask(name);
    }
    else if(cmd === 'edit') {
        let idx = prompt("index to edit");
        let name = prompt("new task");
        tasks[idx - 1].name = name;
    }
    else if(cmd === 'complete') {
        let idx = prompt("index to complete");
        tasks[idx - 1].completed = true;
    }
    else if(cmd === 'delete') {
        let idx = prompt("index to delete");
        tasks.splice(idx - 1, 1);
    }
    else if(cmd == 'exit') {
        break;
    }
    else {
        alert("invalid");
    }
}