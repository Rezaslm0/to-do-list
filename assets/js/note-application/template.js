export function noteTemplate(note){
    return `
        <li id="${note.id}">
            <div class="note-title">${note.title}</div>
            <div class="note-value">${note.note}</div>
        </li>
    `;
}