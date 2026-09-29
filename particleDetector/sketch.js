const r = require("raylib");
const g = require("./geometry.js");
const sc = require("./scanners.js");
const p = require("./particles.js");
const s = require("./screen.js");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(s.WINDOW_WIDTH, s.WINDOW_HEIGHT, "Particle Detector");
    r.SetTargetFPS(s.FPS);
}

function update() {
    sc.changeVelocity();

    sc.moveScanners(g, s.WINDOW_WIDTH, s.WINDOW_HEIGHT);
    sc.detectedByScanner1(g, p);
    sc.detectedByScanner2(g, p);
    sc.detectedByScanner3(g, p);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    p.drawParticles();
    sc.drawScanners();

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
