import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import OnboardingScreen from './src/screens/OnboardingScreen';
import PersonaliseScreen from './src/screens/PersonaliseScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen'; // ЖАҢА
import SettingsScreen from './src/screens/SettingsScreen';         // ЖАҢА

type ScreenType = 'onboarding' | 'personalise' | 'subscription' | 'welcome' | 'signup' | 'confirmation' | 'settings';

export default function App() {
  const [screen, setScreen] = useState<ScreenType>('onboarding');

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
          onNext={() => setScreen('settings')} // Логин сәтті өтсе, бірден Settings бетіне өту үшін
          onRegister={() => setScreen('signup')} 
        />
      )}
      
      {screen === 'signup' && (
        <SignUpScreen onBackToLogin={() => setScreen('confirmation')} /> // Тіркелген соң Код растау бетіне жіберу
      )}

      {screen === 'confirmation' && (
        <ConfirmationScreen onNext={() => setScreen('settings')} /> // Код енгізілген соң Settings бетіне өту
      )}

      {screen === 'settings' && (
        <SettingsScreen onLogout={() => setScreen('welcome')} /> // Шығу басылғанда Welcome бетіне қайтару
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
