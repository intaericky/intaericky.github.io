const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let vw, vh;
let ratio = 4 / 3;

function init() {
    window.requestAnimationFrame(draw);
}

function draw() {
    updateCanvasSize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    window.requestAnimationFrame(draw);
}

function updateCanvasSize() {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if (vw / vh > ratio) {
        canvas.height = vh;
        canvas.width = Math.round(vh * ratio);
    } else {
        canvas.width = vw;
        canvas.height = Math.round(vw / ratio);
    }
}

init();