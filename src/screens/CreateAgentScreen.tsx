import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Agents: undefined;
  CreateAgent: undefined;
  Workflow: undefined;
  KnowledgeBase: undefined;
  CustomTools: undefined;
};

type CreateAgentScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function CreateAgentScreen() {
  const navigation = useNavigation<RootStackParamList>();
  const [agentName, setAgentName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    console.log('Creating agent:', { name: agentName, description });
    // Mock implementation - in a real app, this would call an API
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.label}>智能体名称</Text>
        <TextInput
          style={styles.input}
          value={agentName}
          onChangeText={setAgentName}
          placeholder="输入智能体名称"
        />

        <Text style={styles.label}>描述</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="输入智能体描述"
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity 
          style={styles.createButton}
          onPress={handleCreate}
        >
          <Text style={styles.buttonText}>确认</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  container: {
    padding: 16
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  createButton: {
    backgroundColor: '#1976d2',
    padding: 16,
    borderRadius: 8,
    marginTop: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});
