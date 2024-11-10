let array = [];

function updateArrayOutput() {
    document.getElementById("arrayOutput").innerText = `Current Array: [${array.join(', ')}]`;
}

function addElement() {
    const input = document.getElementById("arrayInput").value;
    const newArray = input.split(',').map(item => item.trim());
    array.push(...newArray);
    updateArrayOutput();
}

function removeElement() {
    const element = prompt("Enter element to remove:");
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        updateArrayOutput();
    } else {
        alert("Element not found!");
    }
}

function findElement() {
    const element = prompt("Enter element to find:");
    const index = array.indexOf(element);
    if (index !== -1) {
        alert(`Element found at index ${index}`);
    } else {
        alert("Element not found!");
    }
}

function reverseArray() {
    array.reverse();
    updateArrayOutput();
}

function sortArray() {
    array.sort();
    updateArrayOutput();
}