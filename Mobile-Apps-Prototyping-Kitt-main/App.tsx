import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import OnboardingScreen from './src/screens/OnboardingScreen';
import PersonaliseScreen from './src/screens/PersonaliseScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  const [screen, setScreen] = useState<'onboarding' | 'personalise' | 'subscription' | 'welcome' | 'signup'>('onboarding');

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'onboarding' && (
        <OnboardingScreen onNext={() => setScreen('personalise')} />
      )}
      
      {screen === 'personalise' && (
        <PersonaliseScreen onNext={() => setScreen('subscription')} />
      )}
      
      {screen === 'subscription' && (
        <SubscriptionScreen onNext={() => setScreen('welcome')} />
      )}
      
      {screen === 'welcome' && (
        <WelcomeScreen 
          onNext={() => setScreen('subscription')} 
          onRegister={() => setScreen('signup')} 
        />
      )}
      
      {screen === 'signup' && (
        <SignUpScreen onBackToLogin={() => setScreen('welcome')} />
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
