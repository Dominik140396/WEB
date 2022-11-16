'use strict';

let rounds = 0;
let maxRounds = 0;
let compWin = 0;
let userWin = 0;
const NewGame = '<button class="btn gameover" type="button" onclick="window.location.reload()">Spiel neu Starten</button>';

function setRound() {
    maxRounds = document.querySelector('#roundsCounter').value;
    if (Number(maxRounds) > 0) {
        document.querySelector('.rounds').classList.toggle('none');
        document.querySelector('.game').classList.toggle('none');
        document.querySelector('#outputRounds').innerHTML = 'Runde: ' + rounds + ' von ' + maxRounds;
    }
}
function game(userChoice) {
    let result;
    function getRandomInt() {
        return Math.floor(Math.random() * 4);
    }
    let compChoice = getRandomInt();

    switch (compChoice) {
        case 0: compChoice = "Schere"; break;
        case 1: compChoice = "Stein"; break;
        case 2: compChoice = "Papier"; break;
        case 3: compChoice = "Brunnen"; break;
    }
    // 0 Unentschieden, 1 Sieg, 2 Lose
        if(compChoice === "Schere") {
            switch (userChoice) {
                case "Schere": result = 0; break;
                case "Stein": result = 1; break;
                case "Papier": result = 2; break;
                case "Brunnen": result = 1; break;
            }
        }
    if(compChoice === "Stein") {
        switch (userChoice) {
            case "Schere": result = 2; break;
            case "Stein": result = 0; break;
            case "Papier": result = 1; break;
            case "Brunnen": result = 1; break;
        }
    }
    if(compChoice === "Papier") {
        switch (userChoice) {
            case "Schere": result = 1; break; //gewinnt User
            case "Stein": result = 2; break; //verliert User
            case "Papier": result = 0; break; //Unentschieden
            case "Brunnen": result = 2; break;
        }
    }
    if(compChoice === "Brunnen") {
        switch (userChoice) {
            case "Schere": result = 2; break;
            case "Stein": result = 2; break;
            case "Papier": result = 1; break;
            case "Brunnen": result = 0; break;
        }
    }
    rounds++;
    let output =
        `<div class="flex"<span>User</span><span>Comp</span></div>` +
        `<div class="flex"><img src="${userChoice}.png"><img src="${compChoice}.png"></div>`;

    switch (result) {
        case 0: result = output + "Patt<br>" + userWin + " : " + compWin; break;
        case 1:userWin++;
        result = output + 'User gewinnt<br>' + userWin + " : " + compWin; break
        case 2: compWin++;
        result = `${output} Computer gewinnt<br> ${userWin} : ${compWin}`; break;
    }

    document.querySelector('#outputRounds').innerHTML = `Runde : ${rounds} von ${maxRounds}`;
    document.querySelector('#output').innerHTML = result;

    if(rounds === Number(maxRounds)) {
        if (userChoice > compChoice) {
            document.querySelector('.game').innerHTML = `<div class="gameoverText">Spiel ist vorbei, User hat gewonnen<br> ${NewGame}</div>`;
        } else if (compWin > userWin) {
            document.querySelector('.game').innerHTML = `<div class="gameoverText">Spiel ist vorbei, NPC hat gewonnen<br> ${NewGame}</div>`;
        } else {
            document.querySelector('.game').innerHTML = `<div class="gameoverText">Spiel ist vorbei, Unentschieden<br> ${NewGame}</div>`;
        }
    }
}
