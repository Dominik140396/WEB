"use strict";


/*
 function greetings(){

    let name = prompt ("Gib deinen Namen ein");
    alert('Herzlich Willkommen ' + name);
    
}

// greetings();


/* Return Werte von Funktionen */
/*
function greetings2() {
    let name = prompt("Dein Vorname");
    let lastname = prompt("Dein Nachname");
    let returnValue = new Array();
    returnValue[returnValue.length] = name;
    returnValue[returnValue.length] = lastname;
    return returnValue;
}

let functionValue = greetings2();
for (let value of functionValue) {
    document.write(' ' + value + ' ');
}

console.log(functionValue);

/* Übergabeparameter von Funktionen */

/*
let user = prompt('Dein name');
let age = prompt('Dein Alter');

function greetings3(username, age) {
    document.write('Der User ' + username + ' ist ' + age + ' Jahre alt.');
}
greetings3(user, age);

/* Übergabe von Rückgabaparameter */
/*
function mathquestion(x) {
    let result = 2 * x * x + 5 * x + 7;
    return result;
}

let userinput = Number(prompt('Gib eine Zahl ein.'));
let mathresult = mathquestion(userinput);
document.write('<br>' + mathresult + '<br>');


/* Fehlerbehandlung */

/*
let a = 1.5484646848965641456156;
let x = prompt('Wie viele Stellen sollen angezeigt werden ?');


try {
    let b = a.toPrecision(x);
    document.write('Gewünschte Präzision: ' + b);
} catch(err) {
    document.write(err.name);
    document.write(err.message);
}


*/



