import React, { useEffect, useState } from 'react';
import DigitalClock from './digital/digital-clock';
import SetTheoryClock from './set-theory/set-theory-clock';
import TixClock from './tix/tix-clock';
import EyeClock from './eye/eye-clock';

export default function ClockContainer() {
  const [timeSetInterval, setTimeSetInterval] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeSetInterval(setInterval(() => setTime(new Date()), 1000));
  }, [setTimeSetInterval]);

  return (
    <>
      <DigitalClock time={time} />
      <SetTheoryClock time={time} />
      <TixClock time={time} />
      <EyeClock time={time} />
    </>
  );
}
