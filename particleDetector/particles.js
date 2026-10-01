const r = require("raylib");
const s = require("./screen.js");

const percent = {
    tenPercent: 0.1,
    thirtyPercent: 0.3,
    fiftyPercent: 0.5,
    seventyPercent: 0.7,
    oneByForty: 0.025,
};

const particles = {
    particle1: {
        x: s.WINDOW_WIDTH * percent.thirtyPercent,
        y: 0,
        width: s.WINDOW_WIDTH * percent.tenPercent,
        height: s.WINDOW_HEIGHT,
    },
    particle2: {
        x: s.WINDOW_WIDTH * percent.seventyPercent,
        y: 0,
        width: s.WINDOW_WIDTH * percent.oneByForty,
        height: s.WINDOW_HEIGHT,
    },
    particle3: {
        x: 0,
        y: s.WINDOW_HEIGHT * percent.fiftyPercent,
        width: s.WINDOW_WIDTH,
        height: s.WINDOW_HEIGHT * percent.oneByForty,
    },
};

function drawParticles() {
    r.DrawRectangleRec(particles.particle1, r.SKYBLUE);
    r.DrawRectangleRec(particles.particle2, r.SKYBLUE);
    r.DrawRectangleRec(particles.particle3, r.SKYBLUE);
}

module.exports = {
    drawParticles,
    particles,
};
