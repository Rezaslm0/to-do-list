import { listOfNote, newNoteBTN, newNoteValue } from "./static.js";

export function noteTemplate(note){
    return `
        <li id="${note.id}">
            <div class="note-value">${note.value}</div>
            <input type="checkbox" id="note-checkbox" name="Check" />
        </li>
    `;
}

export function noteIndexTemplate(){
    return `
        <div class="container">
            <!-- Task Input Section -->
            <div class="task-input-container">
                <h1>Add a Task</h1>
                <div class="task-input">
                    <input type="text" id="${newNoteValue}" placeholder="Add a new task...">
                    <button id="${newNoteBTN}">Add Task</button>
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
                <ul id="${listOfNote}">
                    <!-- Tasks will be dynamically added here -->
                </ul>
            </div>
        </div>

        <script type=""module src="./assets/js/main.js"></script>
    `

}