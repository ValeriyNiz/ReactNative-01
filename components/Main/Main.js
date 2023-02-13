import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { authStateChangeUser } from '../../redux/auth/authOperations';
import { useRoute } from '../../router';

const MyTheme = {
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const Main = () => {
  const { stateChange } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    authStateChangeUser(dispatch);
  }, []);

  const routing = useRoute(stateChange);

  return <NavigationContainer theme={MyTheme}>{routing}</NavigationContainer>;
};
