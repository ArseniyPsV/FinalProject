/**
 * Инициализирует все компоненты приложения.
 * @function initializeApp
 */
 function initializeApp() {
    updateWeather();
    updateExchangeRate();
    initTaskForm();
    initTaskList();
    initTaskActions();
}

document.addEventListener("DOMContentLoaded", initializeApp);
