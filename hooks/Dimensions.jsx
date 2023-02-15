import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const AppContext = createContext({});

export const useDimensions = () => useContext(AppContext);

export const AppDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const onChange = () => {
      const { width, height } = Dimensions.get('window');
      setDimensions({ width, height });
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => subscription?.remove();
  }, []);

  return (
    <AppContext.Provider value={{ dimensions }}>{children}</AppContext.Provider>
  );
};
