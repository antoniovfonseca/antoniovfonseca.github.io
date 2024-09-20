document.write('good job');


let namep = "Jane";

const year = 2018;

// let const = "Nancy";

const isok = true;

const emptyv = null;

document.write(namep);

// create a object

let people = {
    grades: 'graduate',
    height: '5.3'
};

document.write(people.grades);

// create array

let seasons = ['spring','winter']

document.write(seasons[0])

// create array using functions

let seasons02 = new Array ('autum', 'summer');
    document.write(seasons02[0])

// create a function

function greey(){
    document.write('weel done');
}

greey();

// function for the paragraph

function getmsg(){
    return 'print message for paragraph';
}

document.getElementsByID('msg').innerHTML = getmsg();