import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { CreateAgentPayload } from '../types/agent';

export const CreateAgentScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState<CreateAgentPayload>({
    name: '',
    description: '',
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    systemPrompt: '',
  });

  const handleCreate = () => {
    console.log('Creating agent:', formData);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text variant="headlineMedium" style={styles.title}>Create New Agent</Text>
        
        <TextInput
          label="Name"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          style={styles.input}
        />
        
        <TextInput
          label="Description"
          value={formData.description}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
          multiline
          numberOfLines={3}
          style={styles.input}
        />
        
        <TextInput
          label="System Prompt"
          value={formData.systemPrompt}
          onChangeText={(text) => setFormData({ ...formData, systemPrompt: text })}
          multiline
          numberOfLines={5}
          style={styles.input}
        />
        
        <TextInput
          label="Temperature"
          value={formData.temperature?.toString()}
          onChangeText={(text) => setFormData({ ...formData, temperature: parseFloat(text) || 0 })}
          keyboardType="numeric"
          style={styles.input}
        />
        
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleCreate}
            style={styles.button}
          >
            Create Agent
          </Button>
          
          <Button
            mode="outlined"
            onPress={() => navigation.goBack()}
            style={styles.button}
          >
            Cancel
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: 16,
  },
  title: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 24,
    gap: 12,
  },
  button: {
    padding: 4,
  },
});

export default CreateAgentScreen;
