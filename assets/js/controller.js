import * as storageManager from "./storage-manager.js";
import { idGenerator } from "./unique-identifier.js";
import { LS_notes, newNoteValue } from "./static.js";
import * as render from "./render.js";

export function addNewNote(){
    // 1) Get values from user inputs fields
    const noteText = document.getElementById(newNoteValue).value;

    //TODO 2) Validation data
    // code ...

    // 3) Set up valid value to store in local-storage
    const noteData = {
        value: noteText,
        id: idGenerator()
    }

    // 4) Store it in local-storage
    storageManager.add(LS_notes, noteData)

    // 5) Show all data in html content
    render.showAllNotes()
    console.log('valid')
}

export function openNoteApplication(){
    render.noteApplication()

}