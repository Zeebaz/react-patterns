export interface State {
  isPlaying: boolean;
}

export type Action =
  | { type: "[Player] - Toggle play" }
  | { type: "[Player] - Play" }
  | { type: "[Player] - Pause" }
  | { type: "[Player] - Management"; payload: boolean };

export const StateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "[Player] - Toggle play":
      return { ...state, isPlaying: !state.isPlaying };

    case "[Player] - Play":
      return { ...state, isPlaying: true };

    case "[Player] - Pause":
      return { ...state, isPlaying: false };

    case "[Player] - Management":
      return { ...state, isPlaying: action.payload };

    default:
      return state;
  }
};
