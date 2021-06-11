const inventory = [
    {
    name: 'HP Envy 13aq',
    price: 21000,
    brand: 'HP',
    quantity: 5,
    },
    {
    name: 'Dell XPS 9370',
    price: 30000,
    brand: 'Dell',
    quantity: 1,
    },
    {
    name: 'Dell Inspiron 3567',
    price: 9300,
    brand: 'Dell',
    quantity: 12,
    },
    {
    name: 'Dell Latitude E5450',
    price: 8600,
    brand: 'Dell',
    quantity: 2,
    },
    
    {
    name: 'Asus Zenbook',
    brand: 'Asus',
    price: 20000,
    quantity: 4,
    },
    {
    name: 'HP Pavilion',
    brand: 'HP',
    price: 14000,
    quantity: 7,
    }]

function reorderInventory(inventory) {
    let ans = {};
    for (const item of inventory) {
        if(!(item.brand in ans)) ans[item.brand] = []
        ans[item.brand].push(item);
    }
    return ans;
}

console.clear();
const inv = reorderInventory(inventory);
console.log(inv);

while (true) {
    if(prompt("exit? (Y/N)") === "Y") break;
    let brand = prompt("what brand?");
    if (!(brand in inv)) alert("There are no products of this brand in inventory.");
    else {
        let msg = `There are ${inv[brand].length} products of this brand in inventory\n\n`;
        let value = 0;
        for(const item of inv[brand]) {
            msg += item.name + "\n";
            value += item.price * item.quantity;
        }
        msg += `\nTotal value is ${value.toLocaleString()} VNĐ`;
        alert(msg);
    }
}