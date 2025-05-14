/**
 * Инициализирует работу с формой задачи.
 */
 function initTaskForm() {
    const taskForm = document.getElementById('taskForm');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    addTaskBtn.addEventListener('click', () => {
        taskForm.classList.toggle('hidden');
    });

    cancelBtn.addEventListener('click', () => {
        taskForm.classList.add('hidden');
        taskForm.reset();
    });

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const deadline = document.getElementById('deadline').value;
        const tags = document.getElementById('tags').value.split(',').map(tag => tag.trim());
        const status = document.getElementById('status').value;

        if (!validateTask(title, deadline, tags)) {
            alert('Пожалуйста, заполните все обязательные поля.');
            return;
        }

        const task = createTask(title, description, deadline, tags, status);

        const tasks = loadTasks();
        tasks.push(task);
        saveTasks(tasks);
        renderTasks();
        taskForm.classList.add('hidden');
        taskForm.reset();
    });
}

document.addEventListener("DOMContentLoaded", initTaskForm);
