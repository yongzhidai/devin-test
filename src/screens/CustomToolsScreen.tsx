import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomToolsScreen() {
  return (
    <View style={styles.container}>
      <Text>Custom Tools Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
