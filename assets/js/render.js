import { LS_notes } from "./static.js";
import * as storageManager from "./storage-manager.js";
import * as htmlTemplate from './template.js';

export function showAllNotes(){
    // 1) Remove all old data
    const divNotes = document.querySelector('#note-list-items')
    divNotes.innerHTML = ''
    
    // 2) Get new data from local-storage
    const ls = storageManager.get(LS_notes)
    
    // 3) Do injection one-by-one
    ls.forEach((element) => {
        divNotes.innerHTML += htmlTemplate.noteTemplate(element)
        
    });

}

export function noteApplication(){
    // 1) Fill out index.html
    document.body.innerHTML = htmlTemplate.noteIndexTemplate()

    // 2) Fill out css
    document.getElementById('page-style').setAttribute('href', './assets/css/main.css')

    // 3) Fill out listeners
    // Add event listener for the form submission.
    document.getElementById('note-button').addEventListener('click', noteController.addNewNote)
    // If there is any data, display it.
    document.addEventListener('DOMContentLoaded', render.showAllNotes)

}