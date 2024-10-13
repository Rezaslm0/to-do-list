import * as storageManager from "./storage-manager.js";
import { idGenerator } from "./unique-identifier.js";
import { LS_notes, newNoteValue, newNoteBTN } from "./static.js";
import * as render from "./render.js";

export function addNewNote(){
    // 1) Get values from user inputs fields
    const tagInput = document.getElementById(newNoteValue);

    //TODO 2) Validation data
    // code ...

    // 3) Set up valid value to store in local-storage
    const noteData = {
        value: tagInput.value,
        status: null,
        id: idGenerator()
    }

    // 4) Store it in local-storage
    storageManager.add(LS_notes, noteData)

    // 5) Show all data in html content
    render.showAllNotes()

    // 6) Empty it
    tagInput.value = '';
}

export function openNoteApplication(){
    render.noteApplication()

}

export function removeTask(e){
    // 1) Get Id of task
    const taskID = Number(e.target.parentNode.parentNode.id)

    // 2) Remove it from local-storage
    storageManager.remove(LS_notes, Number(taskID))

    // 3) Remove it from html content
    render.showAllNotes()
}

export function toggleTaskCompletion(e){
    // 1) Get Id of task
    const taskElement = e.target.parentNode.parentNode

    // 2) Toggle class to change style
    taskElement.classList.toggle('completed');
    
    // 3) Toggle it in local-storage
    storageManager.toggleCompleted(LS_notes, Number(taskElement.id))

}

export function setTaskListener(){
    let elements

    // A) X - Remove BTNs
    elements = document.getElementsByClassName("btn-remove");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', removeTask);

    }

    // B) Done BTNs
    elements = document.getElementsByClassName("btn-done");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', toggleTaskCompletion);

    }
}

export function addNoteApplicationListeners(){
    // A) Add event listener for the form Add new note
    document.getElementById(newNoteBTN).addEventListener('click', addNewNote);
    
    // B) Task BTNs
    setTaskListener()

    // C) Filters
    document.querySelectorAll('.filter-btn').forEach( function(btn){
        btn.addEventListener('click', render.taskFiltering);

    })

}