const r = require("raylib");

function setup() {
  const word = {
    WINDOW_WIDTH: 900,
    WINDOW_HEIGHT: 600,
    FPS: 60,
    Title: "Bar Chart",
    gap: 10,
  };
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(word.WINDOW_WIDTH, word.WINDOW_HEIGHT, word.Title);
  r.SetTargetFPS(word.FPS);
  return word;
}

function update(word) {
  //
}

function getBarHeight(word, barHeight, largestBarHeight) {
  return (
    word.WINDOW_HEIGHT -
    word.WINDOW_HEIGHT * (barHeight / largestBarHeight) * 0.9
  );
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

function draw(word) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  const barWidth = 50;
  const bars = [
    100, 200, 500, 300, 400, 600, 500, 600, 250, 350, 650, 540, 150, 456, 324,
    765, 453,
  ];
  const largestBarHeight = getLargestHeightOf(bars);
  const averageHeight = getAverageHeightOf(bars);
  const averageLine = {
    start: { x: 0, y: getBarHeight(word, averageHeight, largestBarHeight) },
    end: {
      x: word.WINDOW_WIDTH,
      y: getBarHeight(word, averageHeight, largestBarHeight),
    },
  };

  for (let i = 0; i < bars.length; i++) {
    r.DrawRectangleRec(
      {
        x: (word.gap + barWidth) * i,
        y: getBarHeight(word, bars[i], largestBarHeight),
        width: barWidth,
        height: word.WINDOW_HEIGHT,
      },
      r.DARKBLUE,
    );
    r.DrawLineV(averageLine.start, averageLine.end, r.RED);
  }

  r.EndDrawing();
}

function loop(word) {
  while (!r.WindowShouldClose()) {
    update(word);
    draw(word);
  }
}

function main() {
  const word = setup();
  loop(word);
  r.CloseWindow();
}

main();
