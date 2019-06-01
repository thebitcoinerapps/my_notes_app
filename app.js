const yargs = require('yargs');
const chalk = require('chalk');

const addNote = require('./utils');

yargs.version('1.0.0');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: (argv)=>{
        addNote(argv.title, argv.body);
    }
});
console.log(yargs.argv);