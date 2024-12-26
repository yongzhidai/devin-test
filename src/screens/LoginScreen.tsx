import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Surface, Text } from 'react-native-paper';
import { TextInput as PaperTextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Basic validation
    if (!email.trim() || !password.trim()) {
      window.alert('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      window.alert('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock authentication (in a real app, this would be an API call)
      if (email === 'test@example.com' && password === 'password') {
        await AsyncStorage.setItem('userToken', 'dummy-auth-token');
        window.alert('Login successful!');
      } else {
        window.alert('Invalid credentials');
      }
    } catch (error) {
      window.alert('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <Text style={styles.title}>Welcome Back</Text>
        
        <PaperTextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
        />

        <PaperTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry={true}
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          loading={loading}
          disabled={loading}
        >
          Login
        </Button>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  surface: {
    padding: 20,
    borderRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});

export default LoginScreen;
