/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {styles} from './src/style/style'
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import store from './src/store/index'
import { Provider } from 'react-redux';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaView style={styles.body}>
        <View style={[styles.containerMenu, styles.p15]}>
          <TouchableOpacity onPress={() => this._goto('home')}>
            <Text>HOME PAGE</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    </NavigationContainer>
    </Provider>
  );
};



export default App;
