import { NavigationProp } from '@react-navigation/native';

export type Agent = {
  id: string;
  name: string;
  status: 'online' | 'offline';
};
