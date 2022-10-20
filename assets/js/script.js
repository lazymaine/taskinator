console.dir(window.document);

// selecting DOM elements by ID
var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to dynamically create the task item
var createTaskHandler = function(event) {
        //use event object to prevent the browser from carry out its ecpected behavior
        event.preventDefault();
        // create a new element
        var listItemEl = document.createElement("li");
        // style the new task item
        listItemEl.className = "task-item";
        // add the text
        listItemEl.textContent = "This is a new task.";
        // apped this element to the task list
        tasksToDoEl.appendChild(listItemEl);
};

// event listerner for button click
formEl.addEventListener("submit", createTaskHandler);