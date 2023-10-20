import { useEffect, useState, useRef } from "react";

import PropTypes from "prop-types";

const Timer = ({ duration, onTimeUp }) => {
  const [counter, setCounter] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoaded(100 * (counter / duration));
    if (counter === duration) {
      clearInterval(intervalRef.current);
      setTimeout(() => {
        onTimeUp();
      }, 1000);
    }
  }, [counter]);

  return (
    <div
      style={{
        width: `${progressLoaded}%`,
        height: "5px",
        transitionDuration: "1s",
        transitionTimingFunction: "linear",
        backgroundColor: "red",
      }}
    ></div>
    // <div className="absolute w-0 h-[100px] bg-red-500">aw</div>
  );
};

Timer.propTypes = {
  duration: PropTypes.func,
  onTimeUp: PropTypes.func,
};

Timer.defaultProps = {
  duration: () => {},
  onTimeUp: () => {},
};
export default Timer;
