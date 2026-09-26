const r = require("raylib");
const g = require("./geometry")
const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 700;
const FPS = 240;

let scannerHeight = WINDOW_HEIGHT;
let scannerWidth = WINDOW_WIDTH * 0.1;

let coordX = 0;
let coordY = 0;

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
    coordX += delta;
    if (g.isBorderTouched(coordX, scannerWidth, WINDOW_WIDTH)) {
        moveRight = !moveRight;
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(coordX, coordY, scannerWidth, scannerHeight, r.WHITE);

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