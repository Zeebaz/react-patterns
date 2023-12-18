import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  CompoundComponent,
  ControlProps,

  HOC,
  PropRender,
  PropsGetters,
  StateReducer,
} from "./screens";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ControlProps />,
    },
    {
      path: "/control-props",
      element: <ControlProps />,
    },
    {
      path: "/state-reducer",
      element: <StateReducer />,
    },
    {
      path: "/compound-component",
      element: <CompoundComponent />,
    },
    {
      path: "/props-getters",
      element: <PropsGetters />,
    },
    {
      path: "/hoc",
      element: <HOC />,
    },
    {
      path: "/prop-render",
      element: <PropRender />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
