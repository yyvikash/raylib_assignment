const r = require("raylib");
const g = require("./geometry")
const WINDOW_WIDTH = 900;
const WINDOW_HEIGHT = 700;
const FPS = 240;

const scannerHeight = WINDOW_HEIGHT;
const scannerWidth = WINDOW_WIDTH * 0.05;

const particle1_Height = WINDOW_HEIGHT;
const particle1_Width = WINDOW_WIDTH * 0.15;
const particle2_Height = WINDOW_HEIGHT;
const particle2_Width = WINDOW_WIDTH * 0.025;

let scannerCoordX = 0;
let scannerCoordY = 0;
let scannerColor = r.WHITE;


const particle1_CoordX = WINDOW_WIDTH * 0.3;
const particle1_CoordY = 0;
const particle2_CoordX = WINDOW_WIDTH * 0.7;
const particle2_CoordY = 0;

let moveRight = false;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "Particle Detector");
    r.SetTargetFPS(FPS)
}

function update() {
    let delta = moveRight ? 1 : -1;
    scannerCoordX += delta;

    let isDetected = g.isParticleDetected(scannerCoordX, particle1_CoordX, scannerWidth, particle1_Width) || g.isParticleDetected(scannerCoordX, particle2_CoordX, scannerWidth, particle2_Width);
    scannerColor = isDetected ? r.RED : r.WHITE;

    if (g.isBorderTouched(scannerCoordX, scannerWidth, WINDOW_WIDTH)) {
        moveRight = !moveRight;
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(particle1_CoordX, particle1_CoordY, particle1_Width, particle1_Height, r.BLUE);
    r.DrawRectangle(particle2_CoordX, particle2_CoordY, particle2_Width, particle2_Height, r.BLUE);
    r.DrawRectangle(scannerCoordX, scannerCoordY, scannerWidth, scannerHeight, scannerColor);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};