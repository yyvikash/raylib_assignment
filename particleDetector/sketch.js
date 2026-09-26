const r = require("raylib");
const g = require("./geometry")
const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 700;
const FPS = 240;

const scannerHeight = WINDOW_HEIGHT;
const scannerWidth = WINDOW_WIDTH * 0.1;

const particleHeight = WINDOW_HEIGHT;
const particleWidth = WINDOW_WIDTH * 0.2;

let scannerCoordX = 0;
let scannerCoordY = 0;

const particleCoordX = WINDOW_WIDTH * 0.4;
const particleCoordY = 0;

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
    if (g.isBorderTouched(scannerCoordX, scannerWidth, WINDOW_WIDTH)) {
        moveRight = !moveRight;
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(particleCoordX, particleCoordY, particleWidth, particleHeight, r.BLUE);
    r.DrawRectangle(scannerCoordX, scannerCoordY, scannerWidth, scannerHeight, r.WHITE);

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