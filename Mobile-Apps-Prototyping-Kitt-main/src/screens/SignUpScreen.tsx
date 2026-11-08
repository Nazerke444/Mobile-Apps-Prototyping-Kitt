import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from '../components/button';


interface Props {
  onBackToLogin: () => void;
}

export default function SignUpScreen({ onBackToLogin }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 30 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Create an account to get started</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Luc|" placeholderTextColor="#000" />

        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} placeholder="name@email.com" placeholderTextColor="#A0A0A0" keyboardType="email-address" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Create a password" placeholderTextColor="#A0A0A0" secureTextEntry />

        <Text style={styles.label}>Confirm password</Text>
        <TextInput style={styles.input} placeholder="Confirm password" placeholderTextColor="#A0A0A0" secureTextEntry />

        <View style={styles.checkRow}>
          <View style={styles.box} />
          <Text style={styles.terms}>
            I've read and agree with the <Text style={styles.link}>Terms and Conditions</Text> and the <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </View>

        <Button title="Register" onPress={onBackToLogin} />
        
        <TouchableOpacity style={{ marginTop: 20 }} onPress={onBackToLogin}>
          <Text style={{ color: '#0066FF', textAlign: 'center', fontWeight: 'bold' }}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 6 },
  input: { height: 50, borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, paddingHorizontal: 15, marginBottom: 16, backgroundColor: '#FAFAFA' },
  checkRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 30, marginTop: 10 },
  box: { width: 20, height: 20, borderRadius: 4, borderWidth: 1, borderColor: '#CCC', marginRight: 10, marginTop: 2 },
  terms: { flex: 1, fontSize: 13, color: '#666', lineHeight: 18 },
  link: { color: '#0066FF', fontWeight: '500' }
});
