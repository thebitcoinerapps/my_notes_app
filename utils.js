const fs = require('fs');




const addNote = (title, body)=>{

    const note = {
        title,
        body
    }
    const noteInJSON = JSON.stringify(note);
    console.log(noteInJSON);

    fs.writeFileSync('notes.json', noteInJSON);
}

module.exports = addNote;