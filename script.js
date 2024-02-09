const backgroundImgs = document.querySelectorAll("img");
const sounds = document.querySelectorAll("audio");
sounds[2].volume = 0.2;
sounds[3].volume = 0.6;
sounds[4].volume = 0.3;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let vw, vh;
let displayRatio = 1;
let soundIndex = 13;
let prevSoundIndex = 0;

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
//Unknown
const pandoraUnknown = new Image();

function init() {
    imgSrcLoad();
    ctx.imageSmoothingEnabled = true;
    addEventListener("mousedown", (e) => {
        window.requestAnimationFrame(draw);
    });
    addEventListener("touchstart", (e) => {
        window.requestAnimationFrame(draw);
    });
    drawDefault();
}

function drawDefault() {
    updateCanvasSize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawContent(0, pandoraDefault, "Roboto", "Black");
    ctx.save();
    window.requestAnimationFrame(drawDefault);
}

function draw() {
    updateCanvasSize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cursorOnCanvasX = cursor.x - (vw - canvas.width) / 2;
    const cursorOnCanvasY = cursor.y - (vh - canvas.height) / 2;

    //Section Sensing
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

    //Drawing
    if (cursorOnSection11) {
        prevSoundIndex = soundIndex;
        soundIndex = 8;
        drawContent(8, pandoraDeterminist, "Nabla", "#FEDE3F");
    } else if (cursorOnSection21) {
        prevSoundIndex = soundIndex;
        soundIndex = 7;
        drawContent(7, pandoraPositivist, "Workbench", "blue");
    } else if (cursorOnSection31) {
        prevSoundIndex = soundIndex;
        soundIndex = 3;
        drawContent(3, pandoraFundamentalist, "Special Elite", "black");
    } else if (cursorOnSection41) {
        prevSoundIndex = soundIndex;
        soundIndex = 4;
        drawContent(4, pandoraConspiracyTheorist, "Blaka Ink", "black");
    } else if (cursorOnSection12) {
        prevSoundIndex = soundIndex;
        soundIndex = 6;
        drawContent(6, pandoraEmpiricist, "Amatic SC", "white");
    } else if (cursorOnSection22) {
        prevSoundIndex = soundIndex;
        soundIndex = 5;
        drawContent(5, pandoraHumanist, "Fredericka the Great", "#83450C", 112);
    } else if (cursorOnSection32) {
        prevSoundIndex = soundIndex;
        soundIndex = 1;
        drawContent(1, pandoraBeliever, "Gloria Hallelujah", "White");
    } else if (cursorOnSection42) {
        prevSoundIndex = soundIndex;
        soundIndex = 2;
        drawContent(2, pandoraTraditionalist, "Astloch", "red", 104);
    } else if (cursorOnSection13) {
        prevSoundIndex = soundIndex;
        soundIndex = 11;
        drawContent(11, pandoraHedonist, "Honk", "#00FF1A");
    } else if (cursorOnSection23) {
        prevSoundIndex = soundIndex;
        soundIndex = 9;
        drawContent(9, pandoraEpicurean, "Shrikhand", "black", 112);
    } else if (cursorOnSection33) {
        prevSoundIndex = soundIndex;
        soundIndex = 13;
        drawContent(13, pandoraArtist, "Redacted Script", "White");
    } else if (cursorOnSection43) {
        prevSoundIndex = soundIndex;
        soundIndex = 15;
        drawContent(15, pandoraRevolutionary, "Protest Revolution", "white");
    } else if (cursorOnSection14) {
        prevSoundIndex = soundIndex;
        soundIndex = 12;
        drawContent(12, pandoraNarcissist, "Pirata One", "#F5E7CC");
    } else if (cursorOnSection24) {
        prevSoundIndex = soundIndex;
        soundIndex = 10;
        drawContent(10, pandoraCapitalist, "Libre Barcode EAN13 Text", "#262626");
    } else if (cursorOnSection34) {
        prevSoundIndex = soundIndex;
        soundIndex = 14;
        drawContent(14, pandoraIdeologue, "Rock Salt", "#FCDD09", 96);
    } else if (cursorOnSection44) {
        prevSoundIndex = soundIndex;
        soundIndex = 16;
        drawContent(16, pandoraNihilist, "Bungee Spice", "black", 120);
    } else {
        prevSoundIndex = soundIndex;
        soundIndex = 17;
        drawContent(17, pandoraUnknown, "Redacted", "black");
    }
    ctx.save();
    if (soundIndex != prevSoundIndex) {
        sounds[prevSoundIndex].muted = true;
        sounds[prevSoundIndex].pause();
        sounds[soundIndex].muted = false;
        sounds[soundIndex].play();
        console.log(soundIndex);
    }
    window.requestAnimationFrame(draw);
}

function drawContent(backgroundIndex, pandoraImgObj, fontName, fontColor, titleFontSize = 128, captionFontSize = 24) {
    allBackgroundHidden();
    backgroundImgs[backgroundIndex].style.visibility = "visible";
    const pandoraRatio = pandoraImgObj.width / pandoraImgObj.height;
    if (pandoraRatio < displayRatio) {
        const pandoraWidth = Math.round(canvas.height * pandoraRatio);
        const pandoraHeight = canvas.height;
        ctx.drawImage(pandoraImgObj, (canvas.width - pandoraWidth) / 2, 0, pandoraWidth, pandoraHeight);
    } else {
        const pandoraWidth = canvas.width;
        const pandoraHeight = Math.round(canvas.width / pandoraRatio);
        ctx.drawImage(pandoraImgObj, 0, 0, pandoraWidth, pandoraHeight);
    }
    ctx.fillStyle = fontColor;
    ctx.strokeStyle = fontColor;
    ctx.font = `${titleFontSize}px ${fontName}`;
    ctx.textAlign = "center";
    ctx.scale(canvas.height / 1080, canvas.height / 1080);
    if (false) {
        ctx.lineWidth = 2;
        ctx.strokeText("GODLESS CHAOS", canvas.width * 540 / canvas.height, 540);
    } else {
        ctx.fillText("GODLESS CHAOS", canvas.width * 540 / canvas.height, 540);
    }
    ctx.scale(1080 / canvas.height, 1080 / canvas.height);
    ctx.font = `${captionFontSize}px ${fontName}`;
    ctx.scale(canvas.height / 1080, canvas.height / 1080);
    if (false) {
        ctx.lineWidth = 1;
        ctx.strokeText("Dedicated to my dear friend Yeongjae Lee who saved my soul.", canvas.width * 540 / canvas.height, 596);
    } else {
        ctx.fillText("Dedicated to my dear friend Yeongjae Lee who saved my soul.", canvas.width * 540 / canvas.height, 596);
    }
    ctx.scale(1080 / canvas.height, 1080 / canvas.height);
}

function allBackgroundHidden() {
    for (let i = 0; i < backgroundImgs.length; i++) {
        backgroundImgs[i].style.visibility = "hidden";
    }
}

function muteAllSounds() {
    for (let i = 0; i < sounds.length; i++) {
        sounds[i].muted = true;
    }
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
    pandoraUnknown.src = "Resources/pandoraUnknown.png"
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