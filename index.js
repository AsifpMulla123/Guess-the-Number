const input = document.getElementById('input');
const btn = document.getElementById('btn');
const moves = document.getElementById('moves');
const myNum = document.getElementById('myNum');
const success = document.getElementById('success');
const restart = document.getElementById('restart');
const error = document.getElementById('error');

let remaining = 10;
let randomNum = parseInt(Math.round(Math.random() * 100 + 1));
btn.addEventListener('click', () => {
    if (remaining < 1) {
       return;
    }
    let num = parseInt(input.value);
    if (num == '' || isNaN(num) || num < 1 || num > 100) {
        error.classList.add('active');
        restart.classList.add('activate');
        return;
    }
    remaining--;
    if (randomNum === num) {
        success.classList.add('active');
        restart.classList.add('activate');
        success.innerText = "You Won the game🤩";
    }
    if (remaining == 0) {
        success.classList.add('active');
        success.innerText = "You Lost the game😒";
        success.style.backgroundColor = "red";
        restart.classList.add('activate');
    }

    moves.innerText = remaining;
    myNum.innerText = num > randomNum ? "Higher" : "Lower";
});
restart.addEventListener('click', () => {
    location.reload();
});