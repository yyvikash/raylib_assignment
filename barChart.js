const r = require("raylib");

function setup() {
  const world = {
    WINDOW_WIDTH: 700,
    WINDOW_HEIGHT: 600,
    FPS: 60,
    Title: "Bar Chart",
    noOfBars: 50,
    barWidth: 10,
    gap: 5,
  };
  world.bars = createBars(world.noOfBars);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(world.WINDOW_WIDTH, world.WINDOW_HEIGHT, world.Title);
  r.SetTargetFPS(world.FPS);
  return world;
}

function createBars(noOfBars) {
  const arr = [];
  for (let i = 0; i < noOfBars; i++) {
    arr.push(Math.ceil(Math.random() * 100));
    // arr.push(i + 1);
    // arr.unshift(i + 1);
  }
  return arr;
  //   return [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  //   return [
  //     100, 200, 500, 300, 400, 600, 500, 600, 250, 350, 650, 540, 150, 456, 324,
  //     765, 453,
  //   ];
}

function update(world) {
  //
}

function getBarHeight(world, barHeight, largestBarHeight) {
  return world.WINDOW_HEIGHT * (barHeight / largestBarHeight) * 0.9;
}

function getLargestHeightOf(bars) {
  let largest = bars[0];
  for (let i of bars) {
    largest = Math.max(largest, i);
  }
  return largest;
}

function getAverageHeightOf(bars) {
  let sum = 0;
  for (let i of bars) {
    sum += i;
  }
  return sum / bars.length;
}

function drawAverageLine(world, largestBarHeight) {
  const averageHeight = getAverageHeightOf(world.bars);

  const coordY =
    world.WINDOW_HEIGHT - getBarHeight(world, averageHeight, largestBarHeight);

  const averageLine = {
    start: { x: 0, y: coordY },
    end: {
      x: world.WINDOW_WIDTH,
      y: coordY,
    },
  };

  r.DrawLineV(averageLine.start, averageLine.end, r.RED);
}

function drawBars(world, largestBarHeight) {
  for (let i = 0; i < world.bars.length; i++) {
    let currBarHeight = getBarHeight(world, world.bars[i], largestBarHeight);

    r.DrawRectangleRec(
      {
        x: (world.gap + world.barWidth) * i,
        y: world.WINDOW_HEIGHT - currBarHeight,
        width: world.barWidth,
        height: currBarHeight,
      },
      r.DARKBLUE,
    );
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(r.RAYWHITE);

  const largestBarHeight = getLargestHeightOf(world.bars);

  drawBars(world, largestBarHeight);
  drawAverageLine(world, largestBarHeight);

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
