import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../hooks/auth';

import { AuthRoutes } from './auth.routes'
import { AppRouter } from './app.routes'

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRouter /> : <AuthRoutes />}
    </NavigationContainer>
  )
}