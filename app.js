

const command = process.argv[2]

if(command === 'add'){
    console.log('adding');
}else if(command === 'remove'){
    console.log('removing note');
}

console.log(process.argv);