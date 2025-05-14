/**
 * Загружает задачи из localStorage или инициализирует пустой массив.
 * @function loadTasks
 * @returns {Array} Массив задач.
 */
 function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

/**
 * Сохраняет задачи в localStorage.
 * @function saveTasks
 * @param {Array} tasks - Массив задач для сохранения.
 */
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * Создает новый объект задачи.
 * @function createTask
 * @param {string} title 
 * @param {string} description 
 * @param {string} deadline 
 * @param {Array} tags 
 * @param {string} status 
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
 * @function validateTask
 * @param {string} title 
 * @param {string} deadline 
 * @param {Array} tags 
 * @returns {boolean} 
 */
function validateTask(title, deadline, tags) {
    return !(!title || !deadline || tags.length === 0);
}
