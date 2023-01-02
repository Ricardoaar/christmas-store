import { useCallback, useState } from "react";

export const useToggleState = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggleState = useCallback(() => {
    setState(state => !state);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  return {
    state,
    toggleState,
    setFalse,
    setTrue
  };
};
