const poem = "Red, my darling, you shine so bright like a star in the night sky. Your kindness touches my soul, your intelligence mesmerizes my mind.";
const question = " Will you, my dearest princess be my lovely valentine this fine february? ";
const poemDiv = document.getElementById('poem');
const takeHandBtn = document.getElementById('takeHandBtn');
const proposalDiv = document.getElementById('proposal');
const absolutelyYesBtn = document.getElementById('absolutelyYesBtn');
let confettiActive = false;


// Add event listener to the "YES" button
const yesBtn = document.getElementById('yesBtn');
yesBtn.addEventListener('click', function() {
    alert("No no no, you gotta be more excited than that. Try again");
});

absolutelyYesBtn.addEventListener('click', function() {
    confettiActive = true;
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function confetti() {
        if (!confettiActive) return; // Stop confetti if flag is false

        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return;
        }

        const particleCount = 50 * (timeLeft / duration);
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const velocity = 50 + Math.random() * 200;
            const x = 0.5 + Math.random() * 0.5;
            const y = 0.5 + Math.random() * 0.5;
            const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

            createConfettiParticle({ angle, velocity, x, y, color });
        }

        requestAnimationFrame(confetti);
    }

    confetti();
});

let index = 0;

function displayWord() {
    poemDiv.textContent += poem[index];
    index++;
    if (index === poem.length) {
        takeHandBtn.classList.remove('hidden');
        clearInterval(timer);
    }
}

const timer = setInterval(displayWord, 50);

takeHandBtn.addEventListener('click', function() {
    poemDiv.style.display = 'none';
    takeHandBtn.style.display = 'none'; // Hide the takeHandBtn
    proposalDiv.classList.remove('hidden');
    document.body.style.backgroundColor = 'scarlet';
});

// Event listener to stop confetti animation on any user action
document.addEventListener('mousemove', function() {
    confettiActive = false;
});

document.addEventListener('keydown', function() {
    confettiActive = false;
});

// Function to create confetti particles
function createConfettiParticle({ angle, velocity, x, y, color }) {
    const particle = document.createElement('div');
    particle.className = 'confetti';
    particle.style.backgroundColor = color;
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.position = 'absolute';
    particle.style.top = '0px'; // Set top position to 0
    particle.style.left = (window.innerWidth * 0.5) + 'px'; // Set left position to the middle of the screen

    const radians = angle;
    const speed = velocity;

    const vx = Math.cos(radians) * speed;
    const vy = Math.sin(radians) * speed;

    const animateParticle = () => {
        const particleTop = parseFloat(particle.style.top);
        const particleLeft = parseFloat(particle.style.left);

        const newTop = particleTop + vy / 60; // Update particle position
        const newLeft = particleLeft + vx / 60;

        particle.style.top = newTop + 'px'; // Apply new position
        particle.style.left = newLeft + 'px';

        if (particleTop > window.innerHeight || particleLeft > window.innerWidth) {
            particle.remove(); // Remove particle when it goes out of view
        } else {
            requestAnimationFrame(animateParticle); // Continue animation
        }
    };

    animateParticle();
    document.body.appendChild(particle);
}