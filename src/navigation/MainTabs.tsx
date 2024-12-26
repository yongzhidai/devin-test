import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AiOutlineRobot, AiOutlineAppstore, AiOutlineBook, AiOutlineTool, AiOutlinePlus } from 'react-icons/ai';
import { RootStackParamList } from '../types/navigation';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator<RootStackParamList>();
import AgentsScreen from '../screens/AgentsScreen';
import WorkflowScreen from '../screens/WorkflowScreen';
import KnowledgeBaseScreen from '../screens/KnowledgeBaseScreen';
import CustomToolsScreen from '../screens/CustomToolsScreen';
import CreateAgentScreen from '../screens/CreateAgentScreen';

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Agents" 
        component={AgentsScreen}
        options={{
          title: '智能体',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <AiOutlineRobot color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="CreateAgent" 
        component={CreateAgentScreen}
        options={{
          title: '创建智能体',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <AiOutlinePlus color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Workflow" 
        component={WorkflowScreen}
        options={{
          title: '工作流',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <AiOutlineAppstore color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="KnowledgeBase" 
        component={KnowledgeBaseScreen}
        options={{
          title: '知识库',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <AiOutlineBook color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="CustomTools" 
        component={CustomToolsScreen}
        options={{
          title: '自定义工具',
          tabBarIcon: ({ color, size }: TabBarIconProps) => (
            <AiOutlineTool color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
