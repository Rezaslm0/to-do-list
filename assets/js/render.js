import { listOfNote, LS_notes, newNoteBTN } from "./static.js";
import * as storageManager from "./storage-manager.js";
import * as htmlTemplate from './template.js';
import * as noteController from './controller.js';
import * as render from './render.js';

export function showAllNotes(){
    // 1) Remove all old data
    const divNotes =  document.getElementById(listOfNote) // document.querySelector('#note-list-items')
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
    document.getElementById(newNoteBTN).addEventListener('click', noteController.addNewNote)

    // 4) If there is any data, display it.
    render.showAllNotes()

}