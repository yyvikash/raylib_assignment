const r = require("raylib");
const s = require("./screen.js");
const g = require("./geometry.js");
const p = require("./particles.js");

const scanners = {};

function createScanner(x, y, width, height) {
  return { x: x, y: y, width: width, height: height };
}

scanners.scanner1 = createScanner(0, 0, s.WINDOW_WIDTH * 0.05, s.WINDOW_HEIGHT);

scanners.scanner2 = createScanner(
  s.WINDOW_WIDTH / 2,
  0,
  s.WINDOW_WIDTH * 0.05,
  s.WINDOW_HEIGHT,
);

scanners.scanner3 = createScanner(0, 0, s.WINDOW_WIDTH, s.WINDOW_HEIGHT * 0.05);

const velocity = {};

function addVelocity(v) {
  return v;
}

velocity.scanner1_velocity = addVelocity(1);
velocity.scanner2_velocity = addVelocity(2);
velocity.scanner3_velocity = addVelocity(1);

function changeVelocity() {
  velocity.scanner1_velocity =
    (
      g.isBorderTouched(
        scanners.scanner1.x,
        scanners.scanner1.width,
        0,
        s.WINDOW_WIDTH / 2,
      )
    ) ?
      -velocity.scanner1_velocity
    : velocity.scanner1_velocity;

  velocity.scanner2_velocity =
    (
      g.isBorderTouched(
        scanners.scanner2.x,
        scanners.scanner2.width,
        s.WINDOW_WIDTH / 2,
        s.WINDOW_WIDTH,
      )
    ) ?
      -velocity.scanner2_velocity
    : velocity.scanner2_velocity;

  velocity.scanner3_velocity =
    (
      g.isBorderTouched(
        scanners.scanner3.y,
        scanners.scanner3.height,
        0,
        s.WINDOW_HEIGHT,
      )
    ) ?
      -velocity.scanner3_velocity
    : velocity.scanner3_velocity;
}

function moveScanners() {
  changeVelocity();

  scanners.scanner1.x += velocity.scanner1_velocity;
  scanners.scanner2.x += velocity.scanner2_velocity;
  scanners.scanner3.y += velocity.scanner3_velocity;
}

function drawScanners() {
  r.DrawRectangleRec(
    scanners.scanner1,
    getHorizontalScannerColor(scanners.scanner1, p.particles.particle1),
  );

  r.DrawRectangleRec(
    scanners.scanner2,
    getHorizontalScannerColor(scanners.scanner2, p.particles.particle2),
  );

  r.DrawRectangleRec(
    scanners.scanner3,
    getVerticalScannerColor(scanners.scanner3, p.particles.particle3),
  );
}

function getHorizontalScannerColor(scanner, particle) {
  return (
      g.isParticleDetected(scanner.x, particle.x, scanner.width, particle.width)
    ) ?
      r.RED
    : r.WHITE;
}

function getVerticalScannerColor(scanner, particle) {
  return (
      g.isParticleDetected(
        scanner.y,
        particle.y,
        scanner.height,
        particle.height,
      )
    ) ?
      r.RED
    : r.WHITE;
}

module.exports = {
  drawScanners,
  changeVelocity,
  moveScanners,
  scanners,
};
