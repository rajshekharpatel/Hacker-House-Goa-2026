import { useCallback, useState } from "react";
import { defaultData } from "../data/defaultData";

export default function useBuilderCard() {
  const [data, setData] = useState(defaultData);

  const updateField = useCallback((field, value) => {
    setData((current) => ({
      ...current,
      [field]: value,
    }));
  }, []);

  const setPhoto = useCallback((photo) => {
    setData((current) => ({
      ...current,
      photo,
    }));
  }, []);

  const reset = useCallback(() => {
    setData({
      ...defaultData,
    });
  }, []);

  return {
    data,
    updateField,
    setPhoto,
    reset,
  };
}