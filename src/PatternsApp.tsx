// import { useContext } from "react";
import { MainLayout } from "./layouts";
// import { AppContext } from "./context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CompoundComponent, ControlProps, StateReducer } from "./screens";

const App = () => {
  // const { indexPattern, patterns } = useContext(AppContext);
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
  ]);

  return <RouterProvider router={router} />;
};

export default App;
