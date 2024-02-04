const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let vw, vh;
let displayRatio = 1;
const pandora = new Image();

function init() {
    window.requestAnimationFrame(draw);
    pandora.src = "Resources/pandora.png"
    ctx.imageSmoothingEnabled = true;
}

function draw() {
    updateCanvasSize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const pandoraRatio = pandora.width / pandora.height;
    if (pandoraRatio < displayRatio) {
        const pandoraWidth = Math.round(canvas.height * pandoraRatio);
        const pandoraHeight = canvas.height;
        ctx.drawImage(pandora, (canvas.width - pandoraWidth) / 2, 0, pandoraWidth, pandoraHeight);
    } else {
        const pandoraWidth = canvas.width;
        const pandoraHeight = Math.round(canvas.width / pandoraRatio);
        ctx.drawImage(pandora, 0, 0, pandoraWidth, pandoraHeight);
    }
    ctx.fillStyle = "black";
    ctx.font = "500 128px 'Roboto'";
    ctx.fillText("GODLESS CHAOS", 0, 200);
    ctx.save();
    window.requestAnimationFrame(draw);
}

function updateCanvasSize() {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    console.log(document.documentElement.clientWidth, window.innerWidth);
    if (vw / vh > displayRatio) {
        canvas.height = vh;
        canvas.width = Math.round(vh * displayRatio);
    } else {
        canvas.width = vw;
        canvas.height = Math.round(vw / displayRatio);
    }
}

init();