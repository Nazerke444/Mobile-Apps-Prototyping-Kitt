import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Button from '../components/button';

interface Props {
  onNext: () => void;
  onRegister: () => void;
}

export default function WelcomeScreen({ onNext, onRegister }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.topSpace}>
        <View style={styles.imagePlaceholder}>
          <Text style={{ color: '#999' }}>🖼️ Image Placeholder</Text>
        </View>

        <Text style={styles.title}>Welcome!</Text>

        <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#A0A0A0" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A0A0A0" secureTextEntry />

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <Button title="Login" onPress={onNext} />

        <View style={styles.registerRow}>
          <Text style={styles.grayText}>Not a member? </Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={styles.linkText}>Register now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.socialContainer}>
        <Text style={[styles.grayText, { textAlign: 'center', marginBottom: 15 }]}>Or continue with</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialCircle, { backgroundColor: '#EA4335' }]}><Text style={styles.socialIcon}>G</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.socialCircle, { backgroundColor: '#000000' }]}><Text style={styles.socialIcon}></Text></TouchableOpacity>
          <TouchableOpacity style={[styles.socialCircle, { backgroundColor: '#1877F2' }]}><Text style={styles.socialIcon}>f</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20, justifyContent: 'space-between' },
  topSpace: { marginTop: 20 },
  imagePlaceholder: { width: '100%', height: 160, backgroundColor: '#F0F4FF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  input: { height: 50, borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, backgroundColor: '#FAFAFA', fontSize: 16 },
  forgotText: { color: '#0066FF', marginBottom: 20, fontWeight: '500' },
  registerRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 15 },
  grayText: { color: '#888', fontSize: 14 },
  linkText: { color: '#0066FF', fontWeight: 'bold', fontSize: 14 },
  socialContainer: { marginBottom: 30 },
  socialButtons: { flexDirection: 'row', justifyContent: 'center', gap: 15 },
  socialCircle: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  socialIcon: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
