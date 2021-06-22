var input = document.getElementById("item-input");
var btn = document.getElementById("addBtn"); 
var items = document.getElementById("items"); 

function createDeleteButton(element) {
    let btn = document.createElement('button');
    btn.innerHTML = 'Remove';
    btn.onclick = function() {element.remove();};
    return btn;
}

function addItem(itemName) {
    itemName = itemName.trim()
    if (itemName === "") return;
    let item = document.createElement('li');
    item.innerHTML += itemName;
    item.appendChild(createDeleteButton(item));
    items.append(item);
}

const initItems = ['Backpack', 'MiBand watch', 'Ring'];
initItems.forEach(addItem);

btn.onclick = function() {
    addItem(input.value);
    input.value = "";
};

input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        addItem(input.value);
        input.value = "";
    }
});
