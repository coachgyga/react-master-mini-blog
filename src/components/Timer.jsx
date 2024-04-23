import { useEffect, useState } from "react";

function secondsToHMS(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = sec.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

export const Timer = () => {
  const [elapseTime, setelapseTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("ici", intervalId);
      setelapseTime((prevElapseTime) => {
        return prevElapseTime + 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>{secondsToHMS(elapseTime)}</div>;
};
