import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, FAB, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { Agent } from '../types/agent';

const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Customer Service Bot',
    description: 'AI assistant for customer support',
    createdAt: new Date().toISOString(),
    status: 'active',
  },
  {
    id: '2',
    name: 'Sales Assistant',
    description: 'AI agent for sales inquiries',
    createdAt: new Date().toISOString(),
    status: 'active',
  },
];

export const AgentsScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');

  const renderAgentCard = ({ item }: { item: Agent }) => (
    <Card style={styles.card} onPress={() => console.log('Agent pressed:', item.id)}>
      <Card.Content>
        <Text variant="titleLarge">{item.name}</Text>
        <Text variant="bodyMedium">{item.description}</Text>
        <Text variant="bodySmall">Created: {new Date(item.createdAt).toLocaleDateString()}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search agents"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={mockAgents}
        renderItem={renderAgentCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('CreateAgent')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    margin: 16,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default AgentsScreen;
