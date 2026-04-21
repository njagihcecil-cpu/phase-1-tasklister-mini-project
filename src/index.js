const form = document.getElementById('create-task-form');
const newTask = document.getElementById('new-task-description');
const tasks = document.getElementById('tasks');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskText = newTask.value;
  
  if (taskText !== '') {
    const li = document.createElement('li');
    const ul = document.getElementById('tasks');
    li.textContent = taskText;

    li.addEventListener('click', function() {
      ul.removeChild(li);
    });

    ul.appendChild(li);
  }
});

