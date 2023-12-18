/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export const WithMount = (Component: React.ComponentType<any>) => {
  const EnhancedComponent = (props: any) => {
    useEffect(() => {
      console.log(`Tu estas ${props.isLoggedIn ? "logueado" : "no logueado"}`);
    }, [props.isLoggedIn]);

    return <Component {...props} />;
  };

  return EnhancedComponent;
};
