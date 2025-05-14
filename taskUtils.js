/**
 * Загружает задачи из localStorage или инициализирует пустой массив.
 * @returns {Array} 
 */
 function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

/**
 * Сохраняет задачи в localStorage.
 * @param {Array} tasks
 */
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * Создает новый объект задачи.
 * @returns {Object} 
 */
function createTask(title, description, deadline, tags, status) {
    return {
        id: Date.now().toString(),
        title,
        description,
        deadline,
        tags,
        status,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        history: [{ action: 'created', timestamp: new Date().toISOString() }]
    };
}

/**
 * Валидирует поля ввода задачи.
 * @returns {boolean}
 */
function validateTask(title, deadline, tags) {
    return !(!title || !deadline || tags.length === 0);
}
