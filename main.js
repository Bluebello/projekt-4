const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const options = ["Może", "Tak", "Nie", "Nie wiadomo", "W żadnym wypadku", "Niemożliwe", 'Nie chcesz wiedzieć']


shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    if (input.value !== "" && input.value.slice(-1) === "?") {
        generateAnswer();
        error.textContent = ''
    } else if (input.value !== "" && input.value.slice(-1) !== "?") {
        answer.textContent = '';
        error.textContent = "Pytanie musi kończyć się ?"
    } else {
        answer.textContent = '';
        error.textContent = "Musisz zadać pytanie"
    }
    ball.classList.remove('shake-animation')
}

const generateAnswer = () => {
    const i = Math.floor(Math.random() * options.length)
    answer.textContent = options[i]
}


ball.addEventListener('click', shakeBall)