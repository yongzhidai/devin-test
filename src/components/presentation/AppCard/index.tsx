import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AIApplication } from '../../../types';

interface AppCardProps {
  app: AIApplication;
  onPress: (app: AIApplication) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(app)}>
      <View style={styles.card}>
        <Text style={styles.title}>{app.name}</Text>
        <Text style={styles.description}>{app.description}</Text>
        <Text style={styles.type}>{app.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  type: {
    fontSize: 12,
    color: '#999',
  },
});
