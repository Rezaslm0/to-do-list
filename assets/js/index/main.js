document.getElementById('start').addEventListener('click', openNoteApplication)

function openNoteApplication(){
    document.body.innerHTML = noteApplication()
    document.getElementById('page-style').setAttribute('href', './assets/css/main.css')

}

function noteApplication(){
    return `
        <div class="container">
        <!-- Task Input Section -->
        <div class="task-input-container">
            <h1>Add a Task</h1>
            <div class="task-input">
                <input type="text" id="new-task" placeholder="Add a new task...">
                <button id="add-task-btn">Add Task</button>
            </div>
        </div>

        <!-- Task List Section -->
        <div class="task-list-container">
            <h2>Your Tasks</h2>
            <!-- Filter Section -->
            <div class="filters">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="active">Active</button>
                <button class="filter-btn" data-filter="completed">Completed</button>
            </div>
            <!-- Task List -->
            <ul id="task-list">
                <!-- Tasks will be dynamically added here -->
            </ul>
        </div>
    </div>

    <script src="script.js"></script>
    `

}