const fs = require('fs');


const notesArray = [];

const addNote = (title, body)=>{
    try{
        const note = {
            title,
            body
        }
        const noteInJSON = JSON.stringify(note);
        notesArray.push(noteInJSON);
        console.log(notesArray);
    
        fs.writeFileSync('notes.json', notesArray);
    }catch{
        const note = {
            title,
            body
        }
        const noteInJSON = JSON.stringify(note);
        notesArray.push(noteInJSON);
        console.log(notesArray);
    
        fs.writeFileSync('notes.json', notesArray);
    }

}

module.exports = addNote;