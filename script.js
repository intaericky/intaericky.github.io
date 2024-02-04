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
    updateCanvasSize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cursorOnCanvasX = cursor.x - (vw - canvas.width) / 2;
    const cursorOnCanvasY = cursor.y - (vh - canvas.height) / 2;
    const cursorOnSection11 =
        cursorOnCanvasX >= 0 && cursorOnCanvasX < canvas.width / 4 &&
        cursorOnCanvasY >= 0 && cursorOnCanvasY < canvas.height / 4;
    const cursorOnSection21 =
        cursorOnCanvasX >= canvas.width / 4 && cursorOnCanvasX < canvas.width * 2 / 4 &&
        cursorOnCanvasY >= 0 && cursorOnCanvasY < canvas.height / 4;
    const cursorOnSection31 =
        cursorOnCanvasX >= canvas.width * 2 / 4 && cursorOnCanvasX < canvas.width * 3 / 4 &&
        cursorOnCanvasY >= 0 && cursorOnCanvasY < canvas.height / 4;
    const cursorOnSection41 =
        cursorOnCanvasX >= canvas.width * 3 / 4 && cursorOnCanvasX <= canvas.width &&
        cursorOnCanvasY >= 0 && cursorOnCanvasY < canvas.height / 4;
    const cursorOnSection12 =
        cursorOnCanvasX >= 0 && cursorOnCanvasX < canvas.width / 4 &&
        cursorOnCanvasY >= canvas.height / 4 && cursorOnCanvasY < canvas.height * 2 / 4;
    const cursorOnSection22 =
        cursorOnCanvasX >= canvas.width / 4 && cursorOnCanvasX < canvas.width * 2 / 4 &&
        cursorOnCanvasY >= canvas.height / 4 && cursorOnCanvasY < canvas.height * 2 / 4;
    const cursorOnSection32 =
        cursorOnCanvasX >= canvas.width * 2 / 4 && cursorOnCanvasX < canvas.width * 3 / 4 &&
        cursorOnCanvasY >= canvas.height / 4 && cursorOnCanvasY < canvas.height * 2 / 4;
    const cursorOnSection42 =
        cursorOnCanvasX >= canvas.width * 3 / 4 && cursorOnCanvasX <= canvas.width &&
        cursorOnCanvasY >= canvas.height / 4 && cursorOnCanvasY < canvas.height * 2 / 4;
    const cursorOnSection13 =
        cursorOnCanvasX >= 0 && cursorOnCanvasX < canvas.width / 4 &&
        cursorOnCanvasY >= canvas.height * 2 / 4 && cursorOnCanvasY < canvas.height * 3 / 4;
    const cursorOnSection23 =
        cursorOnCanvasX >= canvas.width / 4 && cursorOnCanvasX < canvas.width * 2 / 4 &&
        cursorOnCanvasY >= canvas.height * 2 / 4 && cursorOnCanvasY < canvas.height * 3 / 4;
    const cursorOnSection33 =
        cursorOnCanvasX >= canvas.width * 2 / 4 && cursorOnCanvasX < canvas.width * 3 / 4 &&
        cursorOnCanvasY >= canvas.height * 2 / 4 && cursorOnCanvasY < canvas.height * 3 / 4;
    const cursorOnSection43 =
        cursorOnCanvasX >= canvas.width * 3 / 4 && cursorOnCanvasX <= canvas.width &&
        cursorOnCanvasY >= canvas.height * 2 / 4 && cursorOnCanvasY < canvas.height * 3 / 4;
    const cursorOnSection14 =
        cursorOnCanvasX >= 0 && cursorOnCanvasX < canvas.width / 4 &&
        cursorOnCanvasY >= canvas.height * 3 / 4 && cursorOnCanvasY <= canvas.height;
    const cursorOnSection24 =
        cursorOnCanvasX >= canvas.width / 4 && cursorOnCanvasX < canvas.width * 2 / 4 &&
        cursorOnCanvasY >= canvas.height * 3 / 4 && cursorOnCanvasY <= canvas.height;
    const cursorOnSection34 =
        cursorOnCanvasX >= canvas.width * 2 / 4 && cursorOnCanvasX < canvas.width * 3 / 4 &&
        cursorOnCanvasY >= canvas.height * 3 / 4 && cursorOnCanvasY <= canvas.height;
    const cursorOnSection44 =
        cursorOnCanvasX >= canvas.width * 3 / 4 && cursorOnCanvasX <= canvas.width &&
        cursorOnCanvasY >= canvas.height * 3 / 4 && cursorOnCanvasY <= canvas.height;
    if (cursorOnSection11) {
        console.log("11");
        drawBeliever();
    } else if (cursorOnSection21) {
        console.log("21");
        drawBeliever();
    } else if (cursorOnSection31) {
        console.log("31");
        drawBeliever();
    } else if (cursorOnSection41) {
        console.log("41");
        drawBeliever();
    } else if (cursorOnSection12) {
        console.log("12");
        drawBeliever();
    } else if (cursorOnSection22) {
        console.log("22");
        drawBeliever();
    } else if (cursorOnSection32) {
        console.log("32");
        drawBeliever();
    } else if (cursorOnSection42) {
        console.log("42");
        drawBeliever();
    } else if (cursorOnSection13) {
        console.log("13");
        drawBeliever();
    } else if (cursorOnSection23) {
        console.log("23");
        drawBeliever();
    } else if (cursorOnSection33) {
        console.log("33");
        drawBeliever();
    } else if (cursorOnSection43) {
        console.log("43");
        drawBeliever();
    } else if (cursorOnSection14) {
        console.log("14");
        drawBeliever();
    } else if (cursorOnSection24) {
        console.log("24");
        drawBeliever();
    } else if (cursorOnSection34) {
        console.log("34");
        drawBeliever();
    } else if (cursorOnSection44) {
        console.log("44");
        drawBeliever();
    }
    ctx.save();
    window.requestAnimationFrame(draw);
}

function drawBeliever() {
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