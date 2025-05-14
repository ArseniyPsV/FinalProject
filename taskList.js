/**
 * Отрисовывает задачи в списке задач.
 */
 function renderTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = loadTasks();

    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.setAttribute('data-id', task.id);
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Дедлайн: ${task.deadline}</p>
            <div class="tags">${task.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            <div class="status">${task.status}</div>
            <div class="actions">
                <button>Редактировать</button>
                <button>Удалить</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

/**
 * Инициализирует работу со списком задач.
 */
function initTaskList() {
    renderTasks();
}

document.addEventListener("DOMContentLoaded", initTaskList);
