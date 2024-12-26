declare module 'react-native-web' {
  import { ViewStyle } from 'react-native';

  export interface StyleSheet {
    create<T extends { [key: string]: ViewStyle }>(styles: T): T;
  }

  export const StyleSheet: {
    create<T extends { [key: string]: ViewStyle }>(styles: T): T;
  };

  export { View, Text } from 'react-native';
}
