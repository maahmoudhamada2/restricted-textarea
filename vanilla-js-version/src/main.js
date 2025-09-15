const textarea = document.querySelector('textarea');
const counter = document.querySelector('.char-counter');

const handleInput = (event) => {
    let count = event.target.value.length;

    if (count === 250) {
        event.target.classList.add('textarea-text-limit');
        counter.classList.add('counter-text-limit');
    } else {
        event.target.classList.remove('textarea-text-limit');
        counter.classList.remove('counter-text-limit');
    }

    counter.textContent = `${count} / 250`;
}


textarea.addEventListener('input', handleInput);