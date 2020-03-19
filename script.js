/*----------- randomNumber function -------------------*/

function randomNumber(max){
    return Math.floor(Math.random() * max) + 1;
}

/*----------- rules algo ---------------------------*/

let random = randomNumber(10)
let guess = prompt("pick a number from 1 to 10");
let guessAsInt = parseInt(guess);
let life = 0;
let found = false;
console.log(random);

while (!found && life < 5 && guessAsInt <= 10 && guessAsInt > 0){
    life += 1;
    
    if (guessAsInt > random){
        guessAsInt = prompt("pick a SMALLER number!"); 
    }
    else if (guessAsInt < random){
        guessAsInt = prompt("pick a BIGGER number!");
    }
    else{
        found = true;
    }
} 

if (found){
    document.write('<h2>GG!</H2>');
    document.write('<h2>You played ' + life + ' times</H2>');
}
else{
    if (guessAsInt > 100 || guessAsInt < 1){
        document.write('<h2>Number out of boundaries</H2>');
        document.write('<h2>Try again</H2>');
    }
    else if (Number.isNaN(guessAsInt)){
        document.write('<h2>RTFM</H2>');
    }
    else{
        document.write('<h2>You lose</H2>');
        document.write('<h2>You played ' + life + ' times</H2>');
    }
}


/*------------- dark mode ----------------*/

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);





