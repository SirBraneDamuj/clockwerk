import React, { useEffect, useState } from 'react';
import { drawTixClock } from './model';
import Konva from 'konva';

export default function TixClock({
  time,
}) {
  const [stage, setStage] = useState(null);

  useEffect(() => {
    setStage(new Konva.Stage({
      width: 500,
      height: 300,
      container: 'tix-container',
    }));
  }, []);

  useEffect(() => {
    if(stage) {
      drawTixClock(stage, { time });
    }
  }, [stage]);

  useEffect(() => {
    if (stage && time.getSeconds() % 5 === 0) {
      drawTixClock(stage, { time });
    }
  }, [stage, time]);

  return (
    <div>
      <h2>Tix Clock</h2>
      <div id='tix-container' />
    </div>
  );
}
