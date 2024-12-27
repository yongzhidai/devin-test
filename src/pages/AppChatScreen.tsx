import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatContainer } from '../components/business/ChatContainer';
import { useChatStore } from '../store';
import { AIApplication } from '../types';

type RootStackParamList = {
  AppChat: {
    app: AIApplication;
  };
};

type AppChatScreenProps = NativeStackScreenProps<RootStackParamList, 'AppChat'>;

export default function AppChatScreen({ route, navigation }: AppChatScreenProps): JSX.Element {
  const { app } = route.params;
  const { getMessagesForApp, sendMessage, isLoading } = useChatStore();

  // Get messages specific to this app
  const appMessages = getMessagesForApp(app.id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: app.name,
      headerTitleAlign: 'center',
    });
  }, [navigation, app.name]);

  const handleSendMessage = async (content: string) => {
    await sendMessage(content, app.id);
  };

  return (
    <View style={styles.container}>
      <ChatContainer 
        messages={appMessages}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
