import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Agents: undefined;
  CreateAgent: undefined;
  Workflow: undefined;
  KnowledgeBase: undefined;
  CustomTools: undefined;
};

type Agent = {
  id: string;
  name: string;
  status: 'online' | 'offline';
};

export default function AgentsScreen() {
  const navigation = useNavigation<RootStackParamList>();
  const handleCreateAgent = () => {
    navigation.navigate('CreateAgent');
  };
  const agents = [
    { id: '1', name: '测试workflow', status: 'online' },
    { id: '2', name: '测试AM72B', status: 'online' },
    { id: '3', name: '0523智能体', status: 'offline' },
  ];

  const renderAgent: ListRenderItem<Agent> = ({ item }: ListRenderItemInfo<Agent>) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={[styles.statusDot, { backgroundColor: item.status === 'online' ? '#4CAF50' : '#9E9E9E' }]} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}><Text>数据</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>编辑</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>日志</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <TouchableOpacity 
        style={styles.createButton}
        onPress={handleCreateAgent}
      >
        <Text style={styles.createButtonText}>+ 创建-智能体</Text>
      </TouchableOpacity>
      <FlatList
        data={agents}
        keyExtractor={(item: Agent) => item.id}
        renderItem={renderAgent}
        contentContainerStyle={styles.container}
      />
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
  createButton: {
    margin: 16,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed'
  },
  createButtonText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center'
  },
  card: {
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 8
  },
  button: {
    marginRight: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#eee'
  }
});
