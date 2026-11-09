import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal } from 'react-native';

interface Props {
  onLogout: () => void;
}

export default function SettingsScreen({ onLogout }: Props) {
  const [modalVisible, setModalVisible] = useState<boolean>(true); // Дизайн бойынша бірден ашық тұрсын

  return (
    <SafeAreaView style={styles.container}>
      {/* Баптаулар экранының артқы фоны */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.profileName}>Lucas Scott</Text>
        <Text style={styles.profileUsername}>@lucasscott3</Text>
      </View>

      <View style={styles.menuList}>
        {['Saved Messages', 'Appearance', 'Language', 'Privacy & Security', 'Storage'].map((item) => (
          <TouchableOpacity key={item} style={styles.menuItem} onPress={() => item === 'Saved Messages' && setModalVisible(true)}>
            <Text style={styles.menuText}>{item}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Log out Модальді терезесі */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Log out</Text>
            <Text style={styles.modalSubtitle}>Are you sure you want to log out? You'll need to login again to use the app.</Text>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.logoutBtn} onPress={() => { setModalVisible(false); onLogout(); }}>
                <Text style={styles.logoutBtnText}>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { alignItems: 'center', marginTop: 20, marginBottom: 30 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  avatarPlaceholder: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#EAEAEA', marginBottom: 12 },
  profileName: { fontSize: 18, fontWeight: 'bold' },
  profileUsername: { fontSize: 14, color: '#888', marginTop: 2 },
  menuList: { paddingHorizontal: 20 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  menuText: { fontSize: 16, color: '#333' },
  arrow: { fontSize: 20, color: '#CCC' },
  
  // Модальді терезе стильдері
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: '85%', backgroundColor: '#FFF', borderRadius: 16, padding: 24, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modalSubtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 24, lineHeight: 18 },
  modalButtons: { flexDirection: 'row', gap: 12, width: '100%' },
  cancelBtn: { flex: 1, height: 44, borderRadius: 10, borderWidth: 1, borderColor: '#0066FF', justifyContent: 'center', alignItems: 'center' },
  cancelBtnText: { color: '#0066FF', fontWeight: '600' },
  logoutBtn: { flex: 1, height: 44, borderRadius: 10, backgroundColor: '#0066FF', justifyContent: 'center', alignItems: 'center' },
  logoutBtnText: { color: '#FFF', fontWeight: '600' }
});
