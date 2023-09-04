import React from "react";
import Typewriter from "typewriter-effect";

function Type(listTranslate) {
  return (
    <Typewriter
      options={{
        strings: listTranslate.listTitle,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
