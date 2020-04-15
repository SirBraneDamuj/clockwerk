import Konva from 'konva';

const drawRectArray = (layer, center, count, config, fillFn) => {
  const realWidth = config.width / count;
  for (let i = 0; i < count; i++) {
    const fill = fillFn(i);
    layer.add(new Konva.Rect({
      ...config,
      x: center + ((i - (count / 2)) * realWidth),
      width: realWidth,
      fill,
    }));
  }
}

export function drawSetTheoryClock(stage, {
  time,
}) {
  stage.destroyChildren();

  const layer = new Konva.Layer();
  const center = stage.width() / 2;

  layer.add(new Konva.Circle({
    x: center,
    y: 30,
    radius: 25,
    fill: time.getSeconds() % 2 === 0 ? 'yellow' : undefined,
    stroke: 'black',
    strokeWidth: 2,
  }));

  const baseConfig = {
    stroke: 'black',
    strokeWidth: 3,
    width: 200,
    height: 25,
  };

  const hourSets = Math.floor(time.getHours() / 5);
  const hourSetFillFn = (i) => i < hourSets ? 'red' : 'white';
  const hourSetConfig = {
    ...baseConfig,
    y: 57,
  };
  drawRectArray(layer, center, 4, hourSetConfig, hourSetFillFn);

  const hours = time.getHours() % 5;
  const hoursFillFn = (i) => i < hours ? 'red' : 'white';
  const hoursConfig = {
    ...baseConfig,
    y: 90,
  };
  drawRectArray(layer, center, 4, hoursConfig, hoursFillFn);

  const minuteSets = Math.floor(time.getMinutes() / 5);
  const minuteSetFillFn = (i) => {
    if (i >= minuteSets) {
      return 'white'
    } else if ((i + 1) % 3 === 0) {
      return 'red';
    } else {
      return 'yellow';
    }
  };
  const minuteSetConfig = {
    ...baseConfig,
    y: 120,
  };
  drawRectArray(layer, center, 11, minuteSetConfig, minuteSetFillFn);

  const minutes = time.getMinutes() % 5;
  const minutesFillFn = (i) => i < minutes ? 'yellow' : 'white';
  const minutesConfig = {
    ...baseConfig,
    y: 150,
  };
  drawRectArray(layer, center, 4, minutesConfig, minutesFillFn);

  stage.add(layer);
}
