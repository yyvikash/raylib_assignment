const r = require("raylib");
const s = require("./screen.js");

const scanner1_Height = s.WINDOW_HEIGHT;
const scanner1_Width = s.WINDOW_WIDTH * 0.05;

const scanner2_Height = s.WINDOW_HEIGHT;
const scanner2_Width = s.WINDOW_WIDTH * 0.05;

const scanner3_Height = s.WINDOW_HEIGHT * 0.05;
const scanner3_Width = s.WINDOW_WIDTH;

let scanner1_CoordX = 0;
let scanner1_CoordY = 0;
let scanner1_Color = r.WHITE;

let scanner2_CoordX = s.WINDOW_WIDTH / 2;
let scanner2_CoordY = 0;
let scanner2_Color = r.WHITE;

let scanner3_CoordX = 0;
let scanner3_CoordY = 0;
let scanner3_Color = r.WHITE;

let scanner1_velocity = 1;
let scanner2_velocity = 2;
let scanner3_velocity = 1;

function moveScanners(g, WINDOW_WIDTH, WINDOW_HEIGHT) {
    scanner1_velocity = g.isBorderTouched(
        scanner1_CoordX,
        scanner1_Width,
        0,
        WINDOW_WIDTH / 2,
    )
        ? -scanner1_velocity
        : scanner1_velocity;
    scanner2_velocity = g.isBorderTouched(
        scanner2_CoordX,
        scanner2_Width,
        WINDOW_WIDTH / 2,
        WINDOW_WIDTH,
    )
        ? -scanner2_velocity
        : scanner2_velocity;
    scanner3_velocity = g.isBorderTouched(
        scanner3_CoordY,
        scanner3_Height,
        0,
        WINDOW_HEIGHT,
    )
        ? -scanner3_velocity
        : scanner3_velocity;
}

function changeVelocity() {
    scanner1_CoordX += scanner1_velocity;
    scanner2_CoordX += scanner2_velocity;
    scanner3_CoordY += scanner3_velocity;
}

function drawScanners() {
    r.DrawRectangle(
        scanner1_CoordX,
        scanner1_CoordY,
        scanner1_Width,
        scanner1_Height,
        scanner1_Color,
    );
    r.DrawRectangle(
        scanner2_CoordX,
        scanner2_CoordY,
        scanner2_Width,
        scanner2_Height,
        scanner2_Color,
    );
    r.DrawRectangle(
        scanner3_CoordX,
        scanner3_CoordY,
        scanner3_Width,
        scanner3_Height,
        scanner3_Color,
    );
}

function detectedByScanner3(g, p) {
    scanner3_Color = g.isParticleDetected(
        scanner3_CoordY,
        p.particle3_CoordY,
        scanner3_Height,
        p.particle3_Height,
    )
        ? r.RED
        : r.WHITE;
}

function detectedByScanner2(g, p) {
    scanner2_Color =
        g.isParticleDetected(
            scanner2_CoordX,
            p.particle1_CoordX,
            scanner2_Width,
            p.particle1_Width,
        ) ||
        g.isParticleDetected(
            scanner2_CoordX,
            p.particle2_CoordX,
            scanner2_Width,
            p.particle2_Width,
        )
            ? r.RED
            : r.WHITE;
}

function detectedByScanner1(g, p) {
    scanner1_Color =
        g.isParticleDetected(
            scanner1_CoordX,
            p.particle1_CoordX,
            scanner1_Width,
            p.particle1_Width,
        ) ||
        g.isParticleDetected(
            scanner1_CoordX,
            p.particle2_CoordX,
            scanner1_Width,
            p.particle2_Width,
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
    scanner1_Height,
    scanner1_Width,
    scanner2_Height,
    scanner2_Width,
    scanner3_Height,
    scanner3_Width,
    scanner1_CoordX,
    scanner1_CoordY,
    scanner1_Color,
    scanner2_CoordX,
    scanner2_CoordY,
    scanner2_Color,
    scanner3_CoordX,
    scanner3_CoordY,
    scanner3_Color,
    scanner1_velocity,
    scanner2_velocity,
    scanner3_velocity,
};
