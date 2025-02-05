let taskStack = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    taskStack.push(task);
    taskInput.value = "";
    displayStack();
}

function undoTask() {
    taskStack.pop();
    displayStack();
}

function displayStack() {
    const stackDisplay = document.getElementById("stackDisplay");
    stackDisplay.textContent = taskStack.join(", ");
}