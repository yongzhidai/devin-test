import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import MainTabs from './MainTabs';

// Define the drawer param list type
export type DrawerParamList = {
  PersonalSpace: undefined;
  TeamSpace: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

// Placeholder component for team space
function TeamSpaceScreen() {
  return (
    <View style={styles.container}>
      <Text>团队空间</Text>
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="PersonalSpace"
      screenOptions={{
        headerShown: true,
        drawerPosition: 'left',
      }}
    >
      <Drawer.Screen 
        name="PersonalSpace" 
        component={MainTabs}
        options={{
          title: '个人空间',
          drawerLabel: '个人空间',
        }}
      />
      <Drawer.Screen 
        name="TeamSpace" 
        component={TeamSpaceScreen}
        options={{
          title: '团队空间',
          drawerLabel: '团队空间',
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
