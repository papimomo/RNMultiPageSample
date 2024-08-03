import 'react-native-gesture-handler'; //追記
import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import main from './pages/main';
import second from './pages/second'; // 修正: secondのインポートを削除

const Stack = createStackNavigator();

const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name="main" component={main} />
        <Stack.Screen name="second" component={second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
