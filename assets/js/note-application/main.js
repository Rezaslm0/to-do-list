import * as noteController from './controller.js'
import * as render from "./render.js";

// Add event listener for the form submission.
document.getElementById('note-button').addEventListener('click', noteController.addNewNote)

// If there is any data, display it.
document.addEventListener('DOMContentLoaded', render.showAllNotes)