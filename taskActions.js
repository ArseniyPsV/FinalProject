/**
 * Редактирует задачу с заданным ID.
 * @param {string} id - ID задачи для редактирования.
 */
 function editTask(id) {
    const tasks = loadTasks();
    const task = tasks.find(t => t.id === id);
    const taskForm = document.getElementById('taskForm');

    if (task) {
        document.getElementById('title').value = task.title;
        document.getElementById('description').value = task.description;
        document.getElementById('deadline').value = task.deadline;
        document.getElementById('tags').value = task.tags.join(', ');
        document.getElementById('status').value = task.status;
        taskForm.classList.remove('hidden');
        taskForm.onsubmit = (e) => {
            e.preventDefault();
            task.title = document.getElementById('title').value;
            task.description = document.getElementById('description').value;
            task.deadline = document.getElementById('deadline').value;
            task.tags = document.getElementById('tags').value.split(',').map(tag => tag.trim());
            task.status = document.getElementById('status').value;
            task.updatedAt = new Date().toISOString();
            task.history.push({ action: 'updated', timestamp: new Date().toISOString() });
            saveTasks(tasks);
            renderTasks();
            taskForm.classList.add('hidden');
            taskForm.reset();
            taskForm.onsubmit = null;
        };
    }
}

/**
 * Удаляет задачу с заданным ID.
 * @param {string} id - ID задачи для удаления.
 */
function deleteTask(id) {
    if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
        const tasks = loadTasks().filter(task => task.id !== id);
        saveTasks(tasks);
        renderTasks();
    }
}

/**
 * Инициализирует обработчики событий для кнопок редактирования и удаления задач.
 */
function initTaskActions() {
    const taskList = document.getElementById('taskList');

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const action = e.target.textContent.trim();
            const taskId = e.target.closest('.task').getAttribute('data-id');
            if (action === 'Редактировать') {
                editTask(taskId);
            } else if (action === 'Удалить') {
                deleteTask(taskId);
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", initTaskActions);
