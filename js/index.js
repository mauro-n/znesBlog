const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const particlesOnScreen = 245;
const particleArray = [];
let w, h;
w = canvas.width = window.innerWidth + 1;
h = canvas.height = window.innerHeight;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function clientResize(ev) {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
};

window.addEventListener('resize', clientResize);

function createSnowFlakes() {
    for (let i = 0; i < particlesOnScreen; i++) {
        particleArray.push({
            x: Math.random() * w,
            y: Math.random() * h,
            speedX: random(1, 11),
            speedY: random(7, 15),
            radius: 1
        })
    }
}

function drawSnowFlakes() {
    for (let i = 0; i < particleArray.length; i++) {
        ctx.beginPath();
        ctx.arc(
            particleArray[i].x,
            particleArray[i].y,
            particleArray[i].radius,
            0,
            Math.PI * 2,
            false
        );
        ctx.fillStyle = "#D8D8D4";
        ctx.fill();

    }
}

function moveSnowFlakes() {
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].x += particleArray[i].speedX;
        particleArray[i].y += particleArray[i].speedY;

        if (particleArray[i].y > h) {
            particleArray[i].x = Math.random() * w * 1.5;
            particleArray[i].y = -50;
        }
    }
};

function updateSnowFall() {
    ctx.clearRect(0, 0, w, h);
    
    drawSnowFlakes();
    moveSnowFlakes();
};

setInterval(updateSnowFall, 50);
createSnowFlakes();