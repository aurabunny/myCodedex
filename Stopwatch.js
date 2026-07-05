import React from "react";
// Import useState here 💖
import { useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  // update state here 💖
  setTimeout(function() {
  setSeconds(seconds + 1);
    }, 1000);

  return (
        <div>
          <h2>Time Starts Now!</h2>
            {seconds} seconds
        </div>
        )
}
