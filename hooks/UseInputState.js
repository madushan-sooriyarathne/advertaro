import { useState } from "react";

const useInputState = (initialState = "") => {
  const [state, setState] = useState(initialState);

  const updateState = (event) => {
    setState(event.target.value);
  };

  const resetState = () => {
    setState("");
  };

  return [state, updateState, resetState];
};

export default useInputState;
