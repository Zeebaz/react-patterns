import { useEffect } from "react";

export const WithMount = (Component: React.ComponentType<any>) => {
  const EnhancedComponent = () => {
    useEffect(() => {
      console.log("Component mounted");
    }, []);
    return <Component />;
  };

  return EnhancedComponent;
};
