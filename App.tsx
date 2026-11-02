import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import WelcomeScreen from './assets/screens/WelcomeScreen';
import PersonaliseScreen from './assets/screens/PersonaliseScreen';
export default function App() {
  const [screen, setScreen] = useState<'welcome' | 'personalise'>('welcome');

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'welcome' ? (
        <WelcomeScreen onNext={() => setScreen('personalise')} />
      ) : (
        <PersonaliseScreen />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
