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

    // 4) Set task Listener
    noteController.setTaskListener()
}

export function noteApplication(){
    // 1) Fill out index.html
    document.body.innerHTML = htmlTemplate.noteIndexTemplate()

    // 2) Fill out css
    document.getElementById('page-style').setAttribute('href', './assets/css/main.css')

    // 3) If there is any data, display it.
    render.showAllNotes()

    // 4) Active listeners
    noteController.addNoteApplicationListeners()
}

export function taskFiltering() {
    const filter = this.getAttribute('data-filter');
    const tasks = document.querySelectorAll('.task-item');
    
    tasks.forEach(task => {
        switch (filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'active':
                task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                break;
            }
    });
    

    document.querySelectorAll('.filter-btn').forEach( function(btn){
        btn.classList.remove("active");
        
    })
    
    this.classList.add("active");
}