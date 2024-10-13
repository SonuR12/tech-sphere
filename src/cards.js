import VanillaTilt from 'vanilla-tilt';

const cards = document.querySelectorAll('[data-tilt]');
const tiltOptions = {
    glare: true,
    speed: 400,
    max: 15,
    perspective: 500,
    "max-glare": 0.6
}
const tilt = new VanillaTilt.init(cards, tiltOptions);

