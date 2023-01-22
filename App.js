import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './pages/GetStarted';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{
          headerShown: false
        }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{
          headerShown: false
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#BCCBDF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
