import React, { useState } from "react";

const BooleanButtonFunctional = () => {
  const [button, setButton] = useState("");

  const onYesPress = () => {
    setButton("Yes");
    console.log({ button });
  };

  const onNoPress = () => {
    setButton("No");
    console.log({ button });
  };

  return (
    <div>
      <button onClick={() => onYesPress()}>Yes</button>
      <button onClick={() => onNoPress()}>No</button>
    </div>
  );
};

export default BooleanButtonFunctional;
