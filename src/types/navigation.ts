import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigationProp } from '@react-navigation/core';
import { TextInput } from 'react-native-paper';

export type RootStackParamList = {
  Agents: undefined;
  CreateAgent: undefined;
  Workflow: undefined;
  KnowledgeBase: undefined;
  CustomTools: undefined;
}

export type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

export type AppNavigationProp = NavigationProp<RootStackParamList>;

export type PaperTextInputProps = React.ComponentProps<typeof TextInput>;
