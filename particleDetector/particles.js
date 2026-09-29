const r = require("raylib");
const s = require("./screen.js");

const tenPercent = 0.1;
const thirtyPercent = 0.3;
const fiftyPercent = 0.5;
const seventyPercent = 0.7;
const oneByForty = 0.025;

const particle1_Height = s.WINDOW_HEIGHT;
const particle1_Width = s.WINDOW_WIDTH * tenPercent;
const particle2_Height = s.WINDOW_HEIGHT;
const particle2_Width = s.WINDOW_WIDTH * oneByForty;
const particle3_Height = s.WINDOW_HEIGHT * oneByForty;
const particle3_Width = s.WINDOW_WIDTH;

const particle1_CoordX = s.WINDOW_WIDTH * thirtyPercent;
const particle1_CoordY = 0;
const particle2_CoordX = s.WINDOW_WIDTH * seventyPercent;
const particle2_CoordY = 0;
const particle3_CoordX = 0;
const particle3_CoordY = s.WINDOW_HEIGHT * fiftyPercent;

function drawParticles() {
    r.DrawRectangle(
        particle1_CoordX,
        particle1_CoordY,
        particle1_Width,
        particle1_Height,
        r.SKYBLUE,
    );
    r.DrawRectangle(
        particle2_CoordX,
        particle2_CoordY,
        particle2_Width,
        particle2_Height,
        r.SKYBLUE,
    );
    r.DrawRectangle(
        particle3_CoordX,
        particle3_CoordY,
        particle3_Width,
        particle3_Height,
        r.SKYBLUE,
    );
}

module.exports = {
    drawParticles,
    particle1_Height,
    particle1_Width,
    particle2_Height,
    particle2_Width,
    particle3_Height,
    particle3_Width,

    particle1_CoordX,
    particle1_CoordY,
    particle2_CoordX,
    particle2_CoordY,
    particle3_CoordX,
    particle3_CoordY,
};
