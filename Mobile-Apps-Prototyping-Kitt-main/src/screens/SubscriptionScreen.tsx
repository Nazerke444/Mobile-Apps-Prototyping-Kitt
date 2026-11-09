import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/button';

interface Props {
  onNext: () => void;
}

export default function SubscriptionScreen({ onNext }: Props) {
  const [selected, setSelected] = useState<'yearly' | 'monthly' | 'weekly'>('yearly');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Choose your{"\n"}subscription plan</Text>
        <Text style={styles.subtitle}>And get a 7-day free trial</Text>

        <TouchableOpacity style={[styles.card, selected === 'yearly' && styles.selected]} onPress={() => setSelected('yearly')}>
          <View style={styles.row}>
            <View style={[styles.radio, selected === 'yearly' && styles.radioOn]} />
            <View>
              <Text style={styles.name}>Yearly</Text>
              <Text style={styles.disc}>-86% discount</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.price}>€ 94.80</Text>
            <Text style={styles.period}>every year</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, selected === 'monthly' && styles.selected]} onPress={() => setSelected('monthly')}>
          <View style={styles.row}>
            <View style={[styles.radio, selected === 'monthly' && styles.radioOn]} />
            <View>
              <Text style={styles.name}>Monthly</Text>
              <Text style={styles.disc}>-53% discount</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.price}>€ 10.90</Text>
            <Text style={styles.period}>every month</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, selected === 'weekly' && styles.selected]} onPress={() => setSelected('weekly')}>
          <View style={styles.row}>
            <View style={[styles.radio, selected === 'weekly' && styles.radioOn]} />
            <Text style={styles.name}>Weekly</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.price}>€ 5.90</Text>
            <Text style={styles.period}>every week</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.features}>
          <Text style={styles.fTitle}>You'll get:</Text>
          <Text style={styles.fText}>★ Unlimited access</Text>
          <Text style={styles.fText}>★ 200GB storage</Text>
          <Text style={styles.fText}>★ Sync all your devices</Text>
        </View>
      </View>
      <Button title="Subscribe" onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20, justifyContent: 'space-between', paddingBottom: 20 },
  content: { marginTop: 40 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 15, color: '#666', marginBottom: 24 },
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#EAEAEA', marginBottom: 12, backgroundColor: '#FAFAFA' },
  selected: { borderColor: '#0066FF', backgroundColor: '#F0F5FF' },
  row: { flexDirection: 'row', alignItems: 'center' },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#CCC', marginRight: 12 },
  radioOn: { borderColor: '#0066FF', backgroundColor: '#0066FF' },
  name: { fontSize: 16, fontWeight: '600' },
  disc: { fontSize: 12, color: '#0066FF', marginTop: 2 },
  right: { alignItems: 'flex-end' },
  price: { fontSize: 16, fontWeight: 'bold' },
  period: { fontSize: 12, color: '#888' },
  features: { marginTop: 20, padding: 16, backgroundColor: '#F9FAFC', borderRadius: 12 },
  fTitle: { fontSize: 15, fontWeight: 'bold', marginBottom: 8 },
  fText: { fontSize: 14, color: '#444', marginBottom: 6 }
});
