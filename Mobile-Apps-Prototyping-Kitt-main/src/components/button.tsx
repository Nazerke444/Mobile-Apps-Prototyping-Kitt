import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0066FF', // Көк түсті батырма (дизайн бойынша)
    width: width - 40,          // Екі жағынан жиек қалдыру
    height: 52,
    borderRadius: 12,           // Бұрыштарын жұмырлау
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: '#0066FF',     // Жеңіл көлеңке эффектісі
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,               // Android үшін көлеңке
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
