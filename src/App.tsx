import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Dify Mobile</Text>
        <Text style={styles.subtitle}>Coming Soon</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});

export default App;
