//---------------------------------------------
//---------------------------------------------
//-------------------CLASSES-------------------
//---------------------------------------------
//---------------------------------------------

var Dog = function(name, age) {
    this.name = name;
    this.age = age;
}

Dog.prototype.bark = function() {
    console.log(this.name + ' barked');
}

//----- EQUIVALE

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    bark() {
        console.log(this.name + ' barked');
    }
}


//---------------------------------------------
//---------------------------------------------
//-------------------ARROW FUNCTIONS-----------
//---------------------------------------------
//---------------------------------------------

var array = [1, 2, 3, 4, 5];
pares = array.filter(function(numero) { return numero % 2 == 0 });

//----- EQUIVALE

var array = [1, 2, 3, 4, 5];
pares = array.filter((numero) => numero % 2 == 0);

//-------------------

(param) => param;

(param) => {
    return param;
};

function a(param) {
    return param;
}


//---------------------------------------------
//---------------------------------------------
//-------------------SPREAD OPERATOR-----------
//---------------------------------------------
//---------------------------------------------

var a = [1, 2, 3];
var b = ['abc', true];

var c = a.concat(b);

//----- EQUIVALE

let a = [1, 2, 3];
let b = ['abc', true];

let c = [ ...a, ...b ];

//-------------------

let pessoa = {
    name: 'Luiz',
    age: 52
};

let pessoaAlterada = {
    ...a,
    age: 30
}

//-------------------

let string = 'abc';
let chars = [ ...string ];


//---------------------------------------------
//---------------------------------------------
//-------------------DEFAULT PARAMETERS--------
//---------------------------------------------
//---------------------------------------------

function foo(a,b,c) {
    if (b == undefined) b = 7;
    if (c == undefined) c = 2;

    return a+b+c;
}

//----- EQUIVALE

function foo(a, b = 7, c = 2) {
    return a+b+c;
}


//---------------------------------------------
//---------------------------------------------
//---------------INTERPOLAÇÃO DE STRING--------
//---------------------------------------------
//---------------------------------------------

var nome = 'Luiz';
var string = 'Olá ' + nome + '! Tudo bom?';

//----- EQUIVALE

let nome = 'Luiz';
let string = `Olá ${nome}! Tudo bom?`;

let filename = 'TCCVersaoFinalDuzentosEQuarentaE9';
let path = `/home/abc/Desktop/${filename}.pdf`;


//---------------------------------------------
//---------------------------------------------
//---------------PROPERTY SHORTHAND------------
//---------------------------------------------
//---------------------------------------------

var name = 'Luiz';
var age = 13;

var person = {
    name: name,
    age: age
}

//----- EQUIVALE

let name = 'Luiz';
let age = 13;

let person = { name, age };