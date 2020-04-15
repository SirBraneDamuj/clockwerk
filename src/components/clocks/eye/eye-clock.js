import React, { useEffect, useState } from 'react';
import { drawEyeClock } from './model';
import Konva from 'konva';

export default function EyeClock({
  time,
}) {
  const [stage, setStage] = useState(null);

  useEffect(() => {
    setStage(new Konva.Stage({
      width: 300,
      height: 150,
      container: 'eye-container',
    }));
  }, []);

  useEffect(() => {
    if (stage) {
      drawEyeClock(stage, { time });
    }
  }, [stage, time]);

  return (
    <div>
      <h2>Eye Clock</h2>
      <div id='eye-container' />
    </div>
  );
}
