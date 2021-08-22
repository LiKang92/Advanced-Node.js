const yargs = require('yargs')


// console.log(yargs.argv);

// console.log(process.argv);
yargs.command({
    command:'add',
    describe:'Add a new note',
    handler: function () {
        console.log('Add a new note');
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a node',
    //describe 不是必须的
    builder:{
        title:{
            describe:'Note title',
            //必填
            demandOption:true,
            type:'string' // 必须要有，不设置type会自动设为true
        }
    },
    handler:function (argv) {
        console.log('Removing the ' + argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'list',
    handler:function () {
        console.log('list all');
    }
})

yargs.command({
    command:'read',
    describe:'read',
    handler:function () {
        console.log('read all');
    }
})

console.log(yargs.argv);