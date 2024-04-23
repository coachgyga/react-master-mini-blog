import { useEffect, useState } from "react";
import { convertSecondsToHMS } from "../utils/time.util";

const useTimer = (interval = 1000) => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return convertSecondsToHMS(timer);
};

export default useTimer;
