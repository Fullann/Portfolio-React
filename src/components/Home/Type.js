import React from "react";
import Typewriter from "typewriter-effect";
import config from '../../config.js';
function Type() {
  return (
    <Typewriter
      options={{
        strings: config.listTitle,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
