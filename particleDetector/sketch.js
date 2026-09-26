const r = require("raylib");
const g = require("./geometry")
const WINDOW_WIDTH = 900;
const WINDOW_HEIGHT = 700;
const FPS = 240;

const scanner1_Height = WINDOW_HEIGHT;
const scanner1_Width = WINDOW_WIDTH * 0.05;

const scanner2_Height = WINDOW_HEIGHT;
const scanner2_Width = WINDOW_WIDTH * 0.05;

const particle1_Height = WINDOW_HEIGHT;
const particle1_Width = WINDOW_WIDTH * 0.15;
const particle2_Height = WINDOW_HEIGHT;
const particle2_Width = WINDOW_WIDTH * 0.025;

let scanner1_CoordX = 0;
let scanner1_CoordY = 0;
let scanner1_Color = r.WHITE;

let scanner2_CoordX = WINDOW_WIDTH / 2;
let scanner2_CoordY = 0;
let scanner2_Color = r.WHITE;


const particle1_CoordX = WINDOW_WIDTH * 0.3;
const particle1_CoordY = 0;
const particle2_CoordX = WINDOW_WIDTH * 0.7;
const particle2_CoordY = 0;

let scanner1_moveRight = false;
let scanner2_moveRight = false;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "Particle Detector");
    r.SetTargetFPS(FPS)
}

function update() {
    let delta1 = scanner1_moveRight ? 1 : -1;
    scanner1_CoordX += delta1;

    let delta2 = scanner2_moveRight ? 2 : -2;
    scanner2_CoordX += delta2;

    let isDetectedLeft = g.isParticleDetected(scanner1_CoordX, particle1_CoordX, scanner1_Width, particle1_Width) || g.isParticleDetected(scanner1_CoordX, particle2_CoordX, scanner1_Width, particle2_Width);
    scanner1_Color = isDetectedLeft ? r.RED : r.WHITE;

    let isDetectedRight = g.isParticleDetected(scanner2_CoordX, particle1_CoordX, scanner2_Width, particle1_Width) || g.isParticleDetected(scanner2_CoordX, particle2_CoordX, scanner2_Width, particle2_Width);
    scanner2_Color = isDetectedRight ? r.RED : r.WHITE;

    if (g.isBorderTouched(scanner1_CoordX, scanner1_Width, 0, WINDOW_WIDTH / 2)) {
        scanner1_moveRight = !scanner1_moveRight;
    }

    if (g.isBorderTouched(scanner2_CoordX, scanner2_Width, WINDOW_WIDTH / 2, WINDOW_WIDTH)) {
        scanner2_moveRight = !scanner2_moveRight;
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(particle1_CoordX, particle1_CoordY, particle1_Width, particle1_Height, r.BLUE);
    r.DrawRectangle(particle2_CoordX, particle2_CoordY, particle2_Width, particle2_Height, r.BLUE);
    r.DrawRectangle(scanner1_CoordX, scanner1_CoordY, scanner1_Width, scanner1_Height, scanner1_Color);
    r.DrawRectangle(scanner2_CoordX, scanner2_CoordY, scanner2_Width, scanner2_Height, scanner2_Color);

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