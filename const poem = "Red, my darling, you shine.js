const poem = "Red, my darling, you shine so bright like a star in the night sky. Your kindness touches my soul, your intelligence mesmerizes my mind.";

const poemDiv = document.getElementById('poem');
const takeHandBtn = document.getElementById('takeHandBtn');
const proposalDiv = document.getElementById('proposal');

let index = 0;

function displayWord() {
    poemDiv.textContent += poem[index];
    index++;
    if (index === poem.length) {
        takeHandBtn.classList.remove('hidden');
        clearInterval(timer);
    }
}

const timer = setInterval(displayWord, 300);

takeHandBtn.addEventListener('click', function() {
    proposalDiv.classList.remove('hidden');
    document.body.style.backgroundColor = '#FFC0CB'; /* Valentine pink */
});
