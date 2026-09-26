const r = require("raylib");

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 700;
const FPS = 240;



function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "");
    r.SetTargetFPS(FPS)
}

function update() {
    //update
}

function draw() {
    // draw the current state
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