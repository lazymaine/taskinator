
// selecting DOM elements by ID
var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to dynamically create the task item
var createTaskHandler = function(event) {
        // use event object to prevent the browser from carry out its ecpected behavior
        event.preventDefault();
        // select the value from 'task-name'
        var taskNameInput = document.querySelector("input[name='task-name").value;
        // select the value from 'task-type'
        var taskTypeInput = document.querySelector("select[name='task-type']").value;
        // create a new element
        var listItemEl = document.createElement("li");
        // style the new task item
        listItemEl.className = "task-item";
        // create div to hold task info and add to list item
        var taskInfoEl = document.createElement("div");
        // give it a class name
        taskInfoEl.className = "task-info";
        // add HTML content to div
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
        
        listItemEl.appendChild(taskInfoEl);

        // add to the task list
        tasksToDoEl.appendChild(listItemEl);
};

// event listerner for button click
formEl.addEventListener("submit", createTaskHandler);