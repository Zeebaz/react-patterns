import { createContext } from "react";

interface contextProps {
  state: boolean;
}
const StateReducerContext = createContext({} as contextProps);

export default StateReducerContext;
