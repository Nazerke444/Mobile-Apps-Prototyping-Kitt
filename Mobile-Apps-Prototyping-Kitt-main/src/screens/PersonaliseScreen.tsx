import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  onNext: () => void;
}

export default function PersonaliseScreen({ onNext }: Props) {

  const [selected, setSelected] = useState<string[]>([]);

  const interests = ['Music', 'Art', 'Sports', 'Travel', 'Movies'];

  const toggleInterest = (interest: string) => {
    setSelected(prev =>
      prev.includes(interest)
        ? prev.filter(item => item !== interest)
        : [...prev, interest]
    );
  };

 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalise your experience</Text>

      <Text style={styles.description}>
        Choose your interests
      </Text>

      {interests.map(interest => (
        <TouchableOpacity
          key={interest}
          style={[
            styles.option,
            selected.includes(interest) && styles.active,
          ]}
          onPress={() => toggleInterest(interest)}
        >
          <Text style={styles.optionText}>{interest}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.result}>
        Selected: {selected.join(', ') || 'None'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222222',
  },
  description: {
    fontSize: 16,
    marginBottom: 25,
    color: '#777777',
  },
  option: {
    padding: 16,
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    marginBottom: 12,
  },
  active: {
    backgroundColor: '#90CAF9',
  },
  optionText: {
    fontSize: 16,
    color: '#222222',
  },
  result: {
    marginTop: 20,
    fontSize: 14,
    color: '#555555',
  },
});