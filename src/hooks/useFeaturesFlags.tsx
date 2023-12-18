import { useEffect, useState } from "react";
import { availableInfo, IInfo } from '../api/fakeApi';

export const useFeaturesFlags = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [features, setFeatures] = useState({} as IInfo);

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures =async () => {
    try {
        setIsLoading(true);
        const data = await availableInfo({ seconds: 3 });
        setFeatures(data);
    } catch (error) {
        console.log(error)
    }
  }

  return { isLoading, features, fetchFeatures };
};
