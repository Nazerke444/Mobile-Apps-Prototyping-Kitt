import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type Props = {
  onNext: () => void;
};

export default function WelcomeScreen({ onNext }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <Text style={styles.description}>
        Create your own personal experience
      </Text>

      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222222',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    color: '#777777',
  },
  button: {
    backgroundColor: '#0078FF',
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});