import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AgentsScreen from '../screens/AgentsScreen';
import WorkflowScreen from '../screens/WorkflowScreen';
import KnowledgeBaseScreen from '../screens/KnowledgeBaseScreen';
import CustomToolsScreen from '../screens/CustomToolsScreen';
import CreateAgentScreen from '../screens/CreateAgentScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Agents" 
        component={AgentsScreen}
        options={{
          title: '智能体',
        }}
      />
      <Tab.Screen 
        name="CreateAgent" 
        component={CreateAgentScreen}
        options={{
          title: '创建智能体',
        }}
      />
      <Tab.Screen 
        name="Workflow" 
        component={WorkflowScreen}
        options={{
          title: '工作流',
        }}
      />
      <Tab.Screen 
        name="KnowledgeBase" 
        component={KnowledgeBaseScreen}
        options={{
          title: '知识库',
        }}
      />
      <Tab.Screen 
        name="CustomTools" 
        component={CustomToolsScreen}
        options={{
          title: '自定义工具',
        }}
      />
    </Tab.Navigator>
  );
}
