declare module '@react-navigation/core' {
  import * as React from 'react';
  
  export interface NavigationContainerProps {
    children: React.ReactNode;
  }
  
  export const NavigationContainer: React.ComponentType<NavigationContainerProps>;
}

declare module '@react-navigation/native-stack' {
  export function createNativeStackNavigator(): any;
}

declare module '@react-navigation/bottom-tabs' {
  export function createBottomTabNavigator(): any;
}
