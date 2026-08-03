"use client";

import { useState, useEffect } from "react";

const TARGET_DATE = new Date("Dec 31, 2030 13:00:00");

function getTimeLeft() {
  const diff = Math.max(TARGET_DATE.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const units = ["days", "hours", "minutes", "seconds"] as const;

// Countdown timer that ticks down to a target date.
export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<null | ReturnType<typeof getTimeLeft>>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section space">
      <div className="container">
        <div className="row gy-5 text-center">
          <div className="col-md-12">
            <h2 className="title-section-small mb-3">Every Second Drives Results</h2>
            <p>Agencies will soon have a new way to create urgency, boost engagement, and deliver measurable results.</p>
          </div>
          <div className="col-md-12">
            <div className="countdown-timer">
              {units.map((unit) => (
                <div key={unit}>
                  {timeLeft ? String(timeLeft[unit]).padStart(2, "0") : "00"}
                  <span>{unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
