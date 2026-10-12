const r = require("raylib");

function setup() {
  const world = {
    WINDOW_WIDTH: 700,
    WINDOW_HEIGHT: 600,
    FPS: 60,
    Title: "Peak Points",
    noOfPoints: 50,
    pointWidth: 10,
    gap: 10,
  };
  world.points = createPoints(world.noOfPoints);
  world.peakPoints = [];

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(world.WINDOW_WIDTH, world.WINDOW_HEIGHT, world.Title);
  r.SetTargetFPS(world.FPS);
  return world;
}

function createPoints(noOfPoints) {
  const arr = [];
  for (let i = 0; i < noOfPoints; i++) {
    arr.push(Math.ceil(Math.random() * 100));
    // arr.push(i + 1);
    // arr.unshift(i + 1);
  }
  return arr;
  //   return [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  //   return [
  //     100, 200, 500, 300, 400, 600, 500, 600, 250, 350, 650, 540, 150, 456, 324,
  //     765, 453,
  //   ];
}

function update(world) {
  //
}

function getPointHeight(world, pointHeight, largestPointHeight) {
  return world.WINDOW_HEIGHT * (pointHeight / largestPointHeight) * 0.9;
}

function getLargestHeightOf(points) {
  let largest = points[0];
  for (let i of points) {
    largest = Math.max(largest, i);
  }
  return largest;
}

function getPeakPoints(world, curr) {
  const isPeak =
    curr > 0 &&
    curr < world.points.length - 1 &&
    world.points[curr] > world.points[curr - 1] &&
    world.points[curr] > world.points[curr + 1];
  if (isPeak) {
    world.peakPoints.push(curr);
  }
}

function drawBars(world, largestPointHeight) {
  let prevpointHeight = getPointHeight(
    world,
    world.points[0],
    largestPointHeight,
  );

  for (let i = 1; i < world.points.length; i++) {
    const currPointHeight = getPointHeight(
      world,
      world.points[i],
      largestPointHeight,
    );
    getPeakPoints(world, i, currPointHeight);

    r.DrawLineV(
      {
        x: (world.gap + world.pointWidth) * i,
        y: world.WINDOW_HEIGHT - currPointHeight,
      },
      {
        x: (world.gap + world.pointWidth) * (i - 1),
        y: world.WINDOW_HEIGHT - prevpointHeight,
      },
      r.BLACK,
    );
    prevpointHeight = currPointHeight;
  }
}

function drawPeakPoints(world, largestPointHeight) {
  for (let i of world.peakPoints) {
    const currPointHeight = getPointHeight(
      world,
      world.points[i],
      largestPointHeight,
    );
    r.DrawCircleV(
      {
        x: (world.gap + world.pointWidth) * i,
        y: world.WINDOW_HEIGHT - currPointHeight,
      },
      5,
      r.RED,
    );
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.RAYWHITE);

  const largestPointHeight = getLargestHeightOf(world.points);

  drawBars(world, largestPointHeight);
  drawPeakPoints(world, largestPointHeight);

  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    update(world);
    draw(world);
  }
}

function main() {
  const world = setup();
  loop(world);
  r.CloseWindow();
}

main();
