const r = require("raylib");
const s = require("./screen.js");

const particles = {};

function createParticle(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

particles.particle1 = createParticle(s.WINDOW_WIDTH * s.percent.thirtyPercent, 0, s.WINDOW_WIDTH * s.percent.tenPercent, s.WINDOW_HEIGHT);
particles.particle2 = createParticle(s.WINDOW_WIDTH * s.percent.seventyPercent, 0, s.WINDOW_WIDTH * s.percent.oneByForty, s.WINDOW_HEIGHT);
particles.particle3 = createParticle(0, s.WINDOW_HEIGHT * s.percent.fiftyPercent, s.WINDOW_WIDTH, s.WINDOW_HEIGHT * s.percent.oneByForty);

function drawParticles() {
    r.DrawRectangleRec(particles.particle1, r.SKYBLUE);
    r.DrawRectangleRec(particles.particle2, r.SKYBLUE);
    r.DrawRectangleRec(particles.particle3, r.SKYBLUE);
}

module.exports = {
    drawParticles,
    particles,
};
