import { useReducer } from "react";
import { State, StateReducer } from "../context";

const initialState: State = {
  isPlaying: false,
};

export const usePlayer = ({ reducer = StateReducer } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const play = () => dispatch({ type: "[Player] - Play" });
  const pause = () => dispatch({ type: "[Player] - Pause" });
  const toggle = () => dispatch({ type: "[Player] - Toggle play" });

  return {
    ...state,
    play,
    pause,
    toggle,
  };
};
