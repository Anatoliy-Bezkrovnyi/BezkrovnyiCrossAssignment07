import * as React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen/OrderDetailsScreen';

const Stack = createStackNavigator();

const AgencyStack = () => {
  return (
    
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
      </Stack.Navigator>
    
  );
};

export default AgencyStack;