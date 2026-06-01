import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AgencyStack from '../navigation/AgencyStack';
import MessagesScreen from '../navigation/screens/MessagesScreen/MessagesScreen';
import TasksScreen from '../navigation/screens/TasksScreen/TasksScreen';
import ProfileScreen from '../navigation/screens/ProfileScreen/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './TabMenu.styles';
import useTheme from '../context/themeContext/useTheme';

const Tab = createBottomTabNavigator();

const TabMenu = () => {

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({

          animation: 'fade',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'Tasks') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#b5cf82',
          tabBarInactiveTintColor: isDark ? '#8e8e93' : '#a1a1a1',
          tabBarStyle: [
            styles.tabBar, 
            {
              backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
              borderTopColor: isDark ? '#303030' : '#e5e5e5',
            }
          ],
          tabBarLabelStyle: styles.tabBarLabel,
          headerStyle: styles.header,
          headerTintColor: '#ffffff',
        })}>
      <Tab.Screen 
          name="Home" 
          component={AgencyStack} 
          options={{ 
            title: 'Home',
            headerShown: false
          }} 
        />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </NavigationContainer>    
  );
};

export default TabMenu;