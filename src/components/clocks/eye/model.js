import Konva from 'konva';

export function drawEyeClock(stage, {
  time,
}) {
  stage.destroyChildren();

  const layer = new Konva.Layer();
  const center = stage.width() / 2;

  layer.add(new Konva.Circle({
    x: center - 60,
    y: 60,
    radius: 50,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 3,
  }));

  layer.add(new Konva.Circle({
    x: center + 60,
    y: 60,
    radius: 50,
    fill: 'white',
    stroke: 'black',
    strokeWidth: 3,
  }));

  const hoursProgress = ((time.getHours() % 12) * 3600 + time.getMinutes() * 60 + time.getSeconds()) / 43200;
  const minutesProgress = (time.getMinutes() * 60 + time.getSeconds()) / 3600;

  const baseConfig = {
    y: 60,
    radius: 24,
    offsetY: 24,
    fill: 'black',
  };

  layer.add(new Konva.Circle({
    ...baseConfig,
    x: center - 60,
    rotation: hoursProgress * 360,
  }));

  layer.add(new Konva.Circle({
    ...baseConfig,
    x: center + 60,
    rotation: minutesProgress * 360,
  }));

  stage.add(layer);
}

