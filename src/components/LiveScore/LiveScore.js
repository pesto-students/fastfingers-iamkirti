import React, { useEffect, useState } from "react";
import { Secsfomatting } from "../utils";

export default function LiveScore({ isGameOver }) {
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    if (isGameOver) {
      const timeout = setInterval(() => {
        setElapsedTime(elapsedTime + 1);
      }, 1000);

      return () => {
        clearInterval(timeout);
      };
    } else {
      setElapsedTime(0);
    }
  }, [elapsedTime, isGameOver]);

  return (
    <div>
      <p>SCORE:{Secsfomatting(elapsedTime)}</p>
    </div>
  );
}
