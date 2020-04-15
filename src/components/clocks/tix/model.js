import Konva from 'konva';

const hoursTensCells = [0, 1, 2];
const hoursOnesCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const minutesTensCells = [0, 1, 2, 3, 4, 5];
const minutesOnesCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const drawRectGrid = (
  layer,
  {
    x, y, rows, cols, filledCells,
  },
  config,
) => {
  let cellNum = 0;
  for (let i=0; i < rows; i++) {
    for (let j=0; j < cols; j++) {
      layer.add(new Konva.Rect({
        ...config,
        x: x + (j * config.width),
        y: y + (i * config.height),
        fill: filledCells.includes(cellNum) ? config.fill : 'white',
      }));

      cellNum++;
    }
  }
};

export function drawTixClock(stage, {
  time,
}) {
  stage.destroyChildren();

  const layer = new Konva.Layer();
  const center = stage.width() / 2;
  const width = 200;

  const hoursTens = Math.floor(time.getHours() / 10);
  const hoursOnes = time.getHours() - (hoursTens * 10)
  const minutesTens = Math.floor(time.getMinutes() / 10);
  const minutesOnes = time.getMinutes() - (minutesTens * 10);
  const baseRectConfig = {
    width: 40,
    height: 40,
    strokeWidth: 2,
    stroke: 'black',
  };

  drawRectGrid(
    layer,
    {
      x: 15,
      y: 15,
      rows: 3,
      cols: 1,
      filledCells: hoursTensCells.sort(() => 0.5 - Math.random()).slice(0, hoursTens),
    },
    {
      ...baseRectConfig,
      fill: 'red',
    }
  );

  drawRectGrid(
    layer,
    {
      x: 65,
      y: 15,
      rows: 3,
      cols: 3,
      filledCells: hoursOnesCells.sort(() => 0.5 - Math.random()).slice(0, hoursOnes),
    },
    {
      ...baseRectConfig,
      fill: 'blue',
    }
  );

  drawRectGrid(
    layer,
    {
      x: 195,
      y: 15,
      rows: 3,
      cols: 2,
      filledCells: minutesTensCells.sort(() => 0.5 - Math.random()).slice(0, minutesTens),
    },
    {
      ...baseRectConfig,
      fill: 'green',
    }
  );

  drawRectGrid(
    layer,
    {
      x: 285,
      y: 15,
      rows: 3,
      cols: 3,
      filledCells: minutesOnesCells.sort(() => 0.5 - Math.random()).slice(0, minutesOnes),
    },
    {
      ...baseRectConfig,
      fill: 'yellow',
    }
  );

  stage.add(layer);
}
