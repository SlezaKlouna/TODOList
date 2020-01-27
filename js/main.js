'use strict';

let taskList = {
    // idTask: taskID(),
    taskContent: '',
    taskState: ''
}

// Form
const form = document.querySelector('.add-task');
const formItem = document.querySelectorAll('.form-item');

const addInput = document.querySelector('.add-input');
const addBtn = document.querySelector('.addBtn');

// TodoList
const taskBox = document.querySelector('.tasks');

const createTodoList = task => {
    let todoList = document.createElement('div');
    let taskCheckbox = document.createElement('input');
    let taskLabel = document.createElement('label');

    taskLabel.textContent = task.taskContent;

    let remove = document.createElement('a');
    let restore = document.createElement('a');

    // add class
    todoList.className = 'task-box';
    taskCheckbox.className = 'task-checkbox';
    taskLabel.className = 'task-label';

    restore.innerHTML = '<a href="#" class="restore-task" data-state="">&#9998;</a>';
    remove.innerHTML = ' <a href="#" class="remove-task" data-state="">&#10006;</a>';

    //add atribute
    taskCheckbox.type = 'checkbox';
    taskLabel.type = 'label';

    //append element
    todoList.append(taskCheckbox);
    todoList.append(taskLabel);
    todoList.append(restore);
    todoList.append(remove);

    taskBox.append(todoList);

    console.log(taskBox);
}

formItem.forEach(item => {
    item.addEventListener('input', event => {
        taskList[event.target.name] = event.target.value;
    });
})

form.addEventListener('submit', event => {
    event.preventDefault();
    createTodoList(taskList);
});

