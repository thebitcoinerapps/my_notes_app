const fs = require('fs');
const chalk = require('chalk');


const notesArray = [];

const addNote = (title, body)=>{
    
    if(!fs.existsSync('notes.json')){
        fs.writeFileSync('notes.json','');
    
    notesArray.push({
        title,
        body
    });
    const arrayJSON = JSON.stringify(notesArray);
    fs.writeFileSync('notes.json', arrayJSON);
    }else{
        const savedNotes = fs.readFileSync('notes.json');
        const saveNotesStr = savedNotes.toString();
        const saveNotesObj = JSON.parse(saveNotesStr);
        
        saveNotesObj.push({
            title,
            body
        });

        const updatedArr = JSON.stringify(saveNotesObj);
        fs.writeFileSync('notes.json', updatedArr);
       
    }
}

const printNotes =()=>{
    if(fs.existsSync('notes.json')){
        const notes = fs.readFileSync('notes.json');
        const notesString = notes.toString();
        const notesObj = JSON.parse(notesString);
        console.log(notesObj);
    }else{
        console.log('There are no notes to print');
    }
}

const removeNotes =(num)=>{
    if(fs.existsSync('notes.json')){
        const notes = fs.readFileSync('notes.json');
        const notesString = notes.toString();
        const notesObj = JSON.parse(notesString);
            for(let i = 0; i<notesObj.length; i++){
                console.log(`${i} t: ${notesObj[i].title} b:${notesObj[i].body}`);
                console.log('----------------------------');
            }
            console.log(`Please use ${chalk.yellow.inverse('node app.js remove --num=number of note to be removed')}`);
                if(num){
                    const newArr = notesObj.splice(num,1);
                    const newArrToBeSaved = JSON.stringify(newArr);
                    fs.writeFileSync('notes.json', newArrToBeSaved);
                }

    }else{
        console.log('There is no notes to remove');
    }

}


module.exports = {
    addNote,
    printNotes,
    removeNotes
}