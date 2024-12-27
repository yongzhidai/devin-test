import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ChatContainer } from '../components/business/ChatContainer';
import { useChatStore } from '../store';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  const { messages, sendMessage, isLoading } = useChatStore();

  return (
    <View style={styles.container}>
      <ChatContainer 
        messages={messages} 
        onSendMessage={sendMessage}
        isLoading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
