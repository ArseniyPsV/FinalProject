/**
 * Инициализирует все компоненты приложения.
 */
 function initializeApp() {
    updateWeather();
    updateExchangeRate();
    initTaskForm();
    initTaskList();
    initTaskActions();

    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskForm = document.getElementById('taskForm');

    addTaskBtn.addEventListener('click', () => {
        taskForm.classList.toggle('hidden');
    });
}

document.addEventListener("DOMContentLoaded", initializeApp);
