// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {
        showFormMessage("Please fill in all fields.", "error");
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showFormMessage("Please enter a valid email address.", "error");
        return;
    }

    // Display success message
    showFormMessage(
        "Thank you, " + name + "! Your form has been validated successfully.",
        "success"
    );

    contactForm.reset();
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type;
}


// To-Do List Functionality
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

// Also allow Enter key
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task first.");
        return;
    }

    // Create list item
    const listItem = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", "Mark task as complete");

    // Create task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Mark task completed or incomplete
    checkbox.addEventListener("change", function () {
        listItem.classList.toggle("completed", checkbox.checked);
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Add elements to list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Add item to list
    taskList.appendChild(listItem);

    // Clear input
    taskInput.value = "";
    taskInput.focus();
}