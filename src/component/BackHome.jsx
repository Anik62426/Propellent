import React from "react";
import Wave from "react-wavify";

const BackHome = () => {
  return (
    <div className="absolute mt-48 left-0 w-full h-full z-10 flex items-center justify-center">
      <Wave
        fill="url(#gradient)"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.3,
          points: 3,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(10)">
            <stop offset="10%" stopColor="#F0DF45" />
            <stop offset="90%" stopColor="#F9AB72" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
};

export default BackHome;
