import React, { useEffect, useState } from 'react';
import { drawSetTheoryClock } from './model';
import Konva from 'konva';

export default function SetTheoryClock({
  time,
}) {
  const [stage, setStage] = useState(null);

  useEffect(() => {
    setStage(new Konva.Stage({
      width: 300,
      height: 300,
      container: 'set-theory-container',
    }));
  }, []);

  useEffect(() => {
    if (stage) {
      drawSetTheoryClock(stage, { time });
    }
  }, [stage, time]);

  return (
    <div>
      <h2><a href='https://en.wikipedia.org/wiki/Mengenlehreuhr' target='_blank'>Mengenlehreuhr</a></h2>
      <h3>Set Theory Clock</h3>
      <div id='set-theory-container' />
    </div>
  );
}
