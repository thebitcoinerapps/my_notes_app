const yargs = require('yargs');
const chalk = require('chalk');

const utils = require('./utils');
console.log(chalk.yellow.inverse('Weclome to notes app! insert node app.js --help for help'));
console.log('\n');

yargs.version('1.0.0');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: (argv)=>{
        utils.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'print',
    describe: 'Show all notes',
    handler: ()=>{
        utils.printNotes();
    }
});
yargs.command({
    command: 'remove',
    describe: 'remove selected note',
    handler: (argv)=>{
        utils.removeNotes(argv.num);
    }
});

console.log(chalk.black(yargs.argv));