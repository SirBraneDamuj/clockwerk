import React, { useEffect, useState } from 'react';
import Konva from 'konva';
import { drawDigitalClock, DigitalClockModes } from './model';

export default function DigitalClock({
  time,
}) {
  const [stage, setStage] = useState(null);
  const [mode, setMode] = useState(DigitalClockModes.TWENTY_FOUR);

  useEffect(() => {
    setStage(new Konva.Stage({
      width: 300,
      height: 100,
      container: 'digital-container',
    }));
  }, []);

  useEffect(() => {
    if (stage) {
      drawDigitalClock(stage, { mode, time });
    }
  }, [stage, mode, time]);

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div>
      <h2>Digital Clock</h2>
      <div>
        <input
          type='radio'
          id='twenty_four'
          name='mode'
          value={DigitalClockModes.TWENTY_FOUR}
          checked={mode === DigitalClockModes.TWENTY_FOUR}
          onChange={handleModeChange}
        />
        <label htmlFor='twenty_four'>24 Hour Mode</label>
      </div>
      <div>
        <input
          type='radio'
          id='twelve'
          name='mode'
          value={DigitalClockModes.TWELVE}
          checked={mode === DigitalClockModes.TWELVE}
          onChange={handleModeChange}
        />
        <label htmlFor='twelve'>12 Hour Mode</label>
      </div>
      <div id='digital-container' />
    </div>
  );
}
