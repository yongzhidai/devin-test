import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Agents: undefined;
  CreateAgent: undefined;
  Workflow: undefined;
  KnowledgeBase: undefined;
  CustomTools: undefined;
};

export type AppNavigationProp = NavigationProp<RootStackParamList>;
