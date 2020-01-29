'use strict';
// const taskID = () => Math.random().toString(36).substr(2, 16);

// Form
const form = document.querySelector('.add-task');
const formItem = document.querySelectorAll('.form-item');

const addInput = document.querySelector("input[type='text']");

// TodoList
const taskBox = document.querySelector('.tasks');
let counterId = 1;

const todoApp = () => {

    // const taskID = () => Math.random().toString(36).substr(2, 16);

    let taskList = {
        // id : taskID(),
        taskContent: '',
    }

    // const storageQuery = () => {
    //     let todo = taskBox.innerHTML;
    //     localStorage.setItem('todo', todo);
    // }
    //
    // if (localStorage.getItem('todo')){
    //     taskBox.innerHTML = localStorage.getItem('todo');
    // }

    const deleteTodo = element => {
        element.addEventListener("click", event => {
            event.preventDefault();
            element.parentElement.remove();
        });
    }

    const createTodoList = task => {
        let todoList = document.createElement('div');
        let taskCheckbox = document.createElement('input');
        let taskLabel = document.createElement('label');

        taskLabel.textContent = task.taskContent;

        let remove = document.createElement('a');
        let edit = document.createElement('a');

        // add class
        todoList.className = 'task-box';
        taskCheckbox.className = 'task-checkbox';
        taskLabel.className = 'task-label';

        edit.innerHTML = `<a href="#" class="edit-task" data-state="edit">&#9998;</a>`;
        remove.innerHTML = `<a href="#" class="remove-task" data-state="remove">&#10006;</a>`;

        //add atribute
        taskCheckbox.type = 'checkbox';
        taskLabel.type = 'label';

        taskCheckbox.setAttribute('id', counterId);
        taskLabel.setAttribute('for', counterId);

        //append element
        todoList.append(taskCheckbox, taskLabel, edit, remove);
        addInput.value = "";
        deleteTodo(remove);

        taskBox.append(todoList);
    }

    formItem.forEach(item => {
        item.addEventListener('input', event => {
            taskList[event.target.name] = event.target.value;
        });
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        createTodoList(taskList);
        counterId++;
    });
}

document.addEventListener('DOMContentLoaded', todoApp);

