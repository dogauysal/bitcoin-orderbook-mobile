import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'mobx-react';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import RootStack from './src/navigation/RootStack';
import { RootStoreContext } from './src/stores/rootStore';

export default function App() {
  return (
    <Provider {...RootStoreContext}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
