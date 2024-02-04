const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let vw, vh;
let displayRatio = 1;

const cursor = {
    x: innerWidth / 2,
    y: innerHeight / 2,
};

addEventListener("mousemove", (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
});

addEventListener(
    "touchmove", (e) => {
        e.preventDefault();
        cursor.x = e.touches[0].clientX;
        cursor.y = e.touches[0].clientY;
    }, { passive: false },
);

//Pandora Image Objects
//Default
const pandoraDefault = new Image();
//Religious Worldview
const pandoraBeliever = new Image();
const pandoraTraditionalist = new Image();
const pandoraFundamentalist = new Image();
const pandoraConspiracyTheorist = new Image();
//Scientific Worldview
const pandoraHumanist = new Image();
const pandoraEmpiricist = new Image();
const pandoraPositivist = new Image();
const pandoraDeterminist = new Image();
//Individualist Worldview
const pandoraEpicurean = new Image();
const pandoraCapitalist = new Image();
const pandoraHedonist = new Image();
const pandoraNarcissist = new Image();
//Romantic Worldview
const pandoraArtist = new Image();
const pandoraIdeologue = new Image();
const pandoraRevolutionary = new Image();
const pandoraNihilist = new Image();

function init() {
    imgSrcLoad();
    ctx.imageSmoothingEnabled = true;
    window.requestAnimationFrame(draw);
}

function draw() {
    drawBeliever();
}

function drawBeliever() {
    updateCanvasSize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const pandoraRatio = pandoraDefault.width / pandoraDefault.height;
    if (pandoraRatio < displayRatio) {
        const pandoraWidth = Math.round(canvas.height * pandoraRatio);
        const pandoraHeight = canvas.height;
        ctx.drawImage(pandoraDefault, (canvas.width - pandoraWidth) / 2, 0, pandoraWidth, pandoraHeight);
    } else {
        const pandoraWidth = canvas.width;
        const pandoraHeight = Math.round(canvas.width / pandoraRatio);
        ctx.drawImage(pandoraDefault, 0, 0, pandoraWidth, pandoraHeight);
    }
    ctx.fillStyle = "black";
    ctx.font = "500 128px sans-serif";
    ctx.textAlign = "center";
    ctx.scale(canvas.height / 1080, canvas.height / 1080);
    ctx.fillText("GODLESS CHAOS", canvas.width * 540 / canvas.height, 540);
    ctx.scale(1080 / canvas.height, 1080 / canvas.height);
    ctx.save();
    window.requestAnimationFrame(draw);
}

function imgSrcLoad() {
    pandoraDefault.src = "Resources/pandoraDefault.png"
    pandoraBeliever.src = "Resources/pandoraBeliever.png"
    pandoraTraditionalist.src = "Resources/pandoraTraditionalist.png"
    pandoraFundamentalist.src = "Resources/pandoraFundamentalist.png"
    pandoraConspiracyTheorist.src = "Resources/pandoraConspiracyTheorist.png"
    pandoraHumanist.src = "Resources/pandoraHumanist.png"
    pandoraEmpiricist.src = "Resources/pandoraEmpiricist.png"
    pandoraPositivist.src = "Resources/pandoraPositivist.png"
    pandoraDeterminist.src = "Resources/pandoraDeterminist.png"
    pandoraEpicurean.src = "Resources/pandoraEpicurean.png"
    pandoraCapitalist.src = "Resources/pandoraCapitalist.png"
    pandoraHedonist.src = "Resources/pandoraHedonist.png"
    pandoraNarcissist.src = "Resources/pandoraNarcissist.png"
    pandoraArtist.src = "Resources/pandoraArtist.png"
    pandoraIdeologue.src = "Resources/pandoraIdeologue.png"
    pandoraRevolutionary.src = "Resources/pandoraRevolutionary.png"
    pandoraNihilist.src = "Resources/pandoraNihilist.png"
}

function updateCanvasSize() {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    if (vw / vh > displayRatio) {
        canvas.height = vh;
        canvas.width = Math.round(vh * displayRatio);
    } else {
        canvas.width = vw;
        canvas.height = Math.round(vw / displayRatio);
    }
}

init();