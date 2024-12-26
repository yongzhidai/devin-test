declare module 'react-native-paper' {
  import * as React from 'react';
  import { TextInputProps as RNTextInputProps } from 'react-native';

  export interface PaperTextInputProps extends RNTextInputProps {
    mode?: 'flat' | 'outlined';
    label?: string;
    secureTextEntry?: boolean;
    error?: boolean;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    style?: any;
  }

  export interface ProviderProps {
    children: React.ReactNode;
    theme?: any;
  }

  export const TextInput: React.ComponentType<PaperTextInputProps>;
  export const Button: React.ComponentType<any>;
  export const Surface: React.ComponentType<any>;
  export const Text: React.ComponentType<any>;
  export const Provider: React.ComponentType<ProviderProps>;
}
