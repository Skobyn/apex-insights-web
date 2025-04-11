"use client";

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO 8601 format string, e.g., "2024-10-31T00:00:00Z"
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft | null = null;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }); // Runs on every re-render to update the timer

  if (!timeLeft) {
    return <p className="text-center text-lg font-semibold">Workshop time has arrived or passed!</p>;
  }

  return (
    <div className="flex space-x-4 justify-center items-end">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="text-center">
          <span className="text-4xl font-bold block">{value}</span>
          <span className="text-xs uppercase text-muted-foreground">{interval}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer; 