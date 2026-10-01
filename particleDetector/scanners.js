const r = require("raylib");
const s = require("./screen.js");

const scanners = {
    scanner1: {
        x: 0,
        y: 0,
        width: s.WINDOW_WIDTH * 0.05,
        height: s.WINDOW_HEIGHT,
    },
    scanner2: {
        x: s.WINDOW_WIDTH / 2,
        y: 0,
        width: s.WINDOW_WIDTH * 0.05,
        height: s.WINDOW_HEIGHT,
    },
    scanner3: {
        x: 0,
        y: 0,
        width: s.WINDOW_WIDTH,
        height: s.WINDOW_HEIGHT * 0.05,
    },
};

let scanner1_Color = r.WHITE;
let scanner2_Color = r.WHITE;
let scanner3_Color = r.WHITE;

let scanner1_velocity = 1;
let scanner2_velocity = 2;
let scanner3_velocity = 1;

function moveScanners(g, WINDOW_WIDTH, WINDOW_HEIGHT) {
    scanner1_velocity = g.isBorderTouched(
        scanners.scanner1.x,
        scanners.scanner1.width,
        0,
        WINDOW_WIDTH / 2,
    )
        ? -scanner1_velocity
        : scanner1_velocity;
    scanner2_velocity = g.isBorderTouched(
        scanners.scanner2.x,
        scanners.scanner2.width,
        WINDOW_WIDTH / 2,
        WINDOW_WIDTH,
    )
        ? -scanner2_velocity
        : scanner2_velocity;
    scanner3_velocity = g.isBorderTouched(
        scanners.scanner3.y,
        scanners.scanner3.height,
        0,
        WINDOW_HEIGHT,
    )
        ? -scanner3_velocity
        : scanner3_velocity;
}

function changeVelocity() {
    scanners.scanner1.x += scanner1_velocity;
    scanners.scanner2.x += scanner2_velocity;
    scanners.scanner3.y += scanner3_velocity;
}

function drawScanners() {
    r.DrawRectangleRec(scanners.scanner1, scanner1_Color);
    r.DrawRectangleRec(scanners.scanner2, scanner2_Color);
    r.DrawRectangleRec(scanners.scanner3, scanner3_Color);
}

function detectedByScanner3(g, p) {
    scanner3_Color = g.isParticleDetected(
        scanners.scanner3.y,
        p.particles.particle3.y,
        scanners.scanner3.height,
        p.particles.particle3.height,
    )
        ? r.RED
        : r.WHITE;
}

function detectedByScanner2(g, p) {
    scanner2_Color =
        g.isParticleDetected(
            scanners.scanner2.x,
            p.particles.particle1.x,
            scanners.scanner2.width,
            p.particles.particle1.width,
        ) ||
        g.isParticleDetected(
            scanners.scanner2.x,
            p.particles.particle2.x,
            scanners.scanner2.width,
            p.particles.particle2.width,
        )
            ? r.RED
            : r.WHITE;
}

function detectedByScanner1(g, p) {
    scanner1_Color =
        g.isParticleDetected(
            scanners.scanner1.x,
            p.particles.particle1.x,
            scanners.scanner1.width,
            p.particles.particle1.width,
        ) ||
        g.isParticleDetected(
            scanners.scanner1.x,
            p.particles.particle2.x,
            scanners.scanner1.width,
            p.particles.particle2.width,
        )
            ? r.RED
            : r.WHITE;
}

module.exports = {
    detectedByScanner1,
    detectedByScanner2,
    detectedByScanner3,
    drawScanners,
    changeVelocity,
    moveScanners,
    scanners,
};
