import Konva from 'konva';

export const DigitalClockModes = {
  TWENTY_FOUR: '24',
  TWELVE: '12',
}

const padStart = (s) => s.padStart(2, '0');

const timeComponents = (time, mode) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  switch(mode) {
    case DigitalClockModes.TWENTY_FOUR:
      return {
        hours: padStart(hours.toString()),
        minutes: padStart(minutes.toString()),
        seconds: padStart(seconds.toString()),
        suffix: '',
      };
    case DigitalClockModes.TWELVE:
      return {
        hours: padStart(((hours % 12) + 1).toString()),
        minutes: padStart(minutes.toString()),
        seconds: padStart(seconds.toString()),
        suffix: hours < 12 ? ' AM' : ' PM',
      };
    default:
      throw new RuntimeError();
  }
}

export function drawDigitalClock(stage, {
  time,
  mode,
}) {
  stage.destroyChildren();

  const {
    hours,
    minutes,
    seconds,
    suffix,
  } = timeComponents(time, mode);

  const layer = new Konva.Layer();
  const simpleText = new Konva.Text({
    x: 30,
    y: 15,
    text: `${hours}:${minutes}:${seconds}${suffix}`,
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'green'
  });
  layer.add(simpleText);
  stage.add(layer);
}
