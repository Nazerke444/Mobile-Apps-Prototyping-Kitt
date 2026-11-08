import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/button';

interface Props {
  onNext: () => void;
}

export default function PersonaliseScreen({ onNext }: Props) {


  return (
    <View style={styles.container}>
      <View style={styles.topSpace}>
        <View style={styles.imagePlaceholder}>
          <Text style={{ color: '#999' }}>🖼️ Onboarding Image</Text>
        </View>

        <View style={styles.indicatorContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text style={styles.title}>Create a prototype in just a few minutes</Text>
        <Text style={styles.subtitle}>
          Enjoy these pre-made components and worry only about creating the best product ever.
        </Text>
      </View>

      <Button title="Next" onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20, justifyContent: 'space-between', paddingBottom: 20 },
  topSpace: { marginTop: 40 },
  imagePlaceholder: { width: '100%', height: 260, backgroundColor: '#F0F4FF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  indicatorContainer: { flexDirection: 'row', marginBottom: 20 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#EAEAEA', marginRight: 6 },
  activeDot: { backgroundColor: '#0066FF', width: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#000', marginBottom: 12, lineHeight: 32 },
  subtitle: { fontSize: 14, color: '#666', lineHeight: 20 }
});
