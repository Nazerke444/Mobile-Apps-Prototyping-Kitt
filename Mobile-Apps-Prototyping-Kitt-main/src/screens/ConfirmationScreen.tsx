import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import Button from '../components/button';

interface Props {
  onNext: () => void;
}

export default function ConfirmationScreen({ onNext }: Props) {
  const [code, setCode] = useState<string>('1'); // Бастапқы мән бірінші ұяшықта '1' тұр

  const handlePressNumber = (num: string) => {
    if (code.length < 4) {
      setCode(prev => prev + num);
    }
  };

  const handleDelete = () => {
    setCode(prev => prev.slice(0, -1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Enter confirmation code</Text>
        <Text style={styles.subtitle}>A 4-digit code was sent to{"\n"}lucasscott3@email.com</Text>

        {/* 4 ұяшық */}
        <View style={styles.codeRow}>
          {[0, 1, 2, 3].map((index) => (
            <View 
              key={index} 
              style={[
                styles.codeBox, 
                code.length === index && styles.codeBoxActive
              ]}
            >
              <Text style={styles.codeText}>{code[index] || ''}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.resendBtn}>
          <Text style={styles.resendText}>Resend code</Text>
        </TouchableOpacity>

        <Button title="Continue" onPress={onNext} />
      </View>

      {/* Дизайн бойынша арнайы жасалған пернетақта */}
      <View style={styles.keyboard}>
        {[
          ['1', '2\nABC', '3\nDEF'],
          ['4\nGHI', '5\nJKL', '6\nMNO'],
          ['7\nPQRS', '8\nTUV', '9\nWXYZ'],
        ].map((row, rIdx) => (
          <View key={rIdx} style={styles.kbRow}>
            {row.map((key) => {
              const num = key.split('\n')[0];
              return (
                <TouchableOpacity key={num} style={styles.kbKey} onPress={() => handlePressNumber(num)}>
                  <Text style={styles.kbKeyText}>{key}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
        <View style={styles.kbRow}>
          <View style={styles.kbKeyEmpty} />
          <TouchableOpacity style={styles.kbKey} onPress={() => handlePressNumber('0')}>
            <Text style={styles.kbKeyText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kbKey} onPress={handleDelete}>
            <Text style={styles.kbKeyText}>⌫</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', justifyContent: 'space-between' },
  content: { paddingHorizontal: 20, alignItems: 'center', marginTop: 50 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#000', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#888', textAlign: 'center', marginBottom: 30, lineHeight: 18 },
  codeRow: { flexDirection: 'row', justifyContent: 'center', gap: 12, marginBottom: 40 },
  codeBox: { width: 56, height: 56, borderWidth: 1, borderColor: '#DDD', borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFAFA' },
  codeBoxActive: { borderColor: '#0066FF', borderWidth: 2, backgroundColor: '#FFF' },
  codeText: { fontSize: 20, fontWeight: '600' },
  resendBtn: { marginBottom: 30 },
  resendText: { color: '#0066FF', fontWeight: '500', fontSize: 15 },
  keyboard: { backgroundColor: '#F4F4F4', paddingVertical: 10 },
  kbRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 8 },
  kbKey: { width: width / 3 - 15, height: 46, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', borderRadius: 5, elevation: 1 },
  kbKeyEmpty: { width: width / 3 - 15, height: 46 },
  kbKeyText: { fontSize: 16, textAlign: 'center', fontWeight: '500', color: '#000' }
});
