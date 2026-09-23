import React, { useState } from 'react';
import {
  View,              
  Text,           
  Image,           
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Alert,
  Linking,
  Platform,
} from 'react-native';

const PROFILE = {
  name: 'Chantika Maharani',
  title: 'Mahasiswa Informatika',
  email: 'chantikam66@gmail.com',
  phone: '082317695470',
  location: 'Cirebon, jawa barat',
  bio: 'life being life',
  avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIP_z4le9c5yCaio13UtJaf6qA-UuyGz3hGubyH_CMzBjBlvpgh=s432-c-no',
  avatarOffline: 'assets/pink.jpg',
};

const SKILLS = [
  { id: '1', name: 'Microsoft Excel', level: 60, color: '#0ea5e9' },
  { id: '2', name: 'Canva', level: 50, color: '#f472b6' },
  { id: '3', name: 'HTML / CSS', level: 60, color: '#f97316' },
  { id: '4', name: 'JavaScript', level: 35, color: '#facc15' },
  { id: '5', name: 'React Native', level: 30, color: '#60a5fa' },
  { id: '6', name: 'Menulis', level: 70, color: '#34d399' },
  { id: '7', name: 'python', level: 50, color: '#58073c' },
  { id: '8', name: 'Bahasa inggris', level: 75, color: '#d56479' },
];

const SECTIONS = [
  {
    title: '💼 Pengalaman Organisasi',
    data: [
      {
        id: 'e1',
        role: 'Sekertaris',
        company: 'Kelompok Ilmiah Remaja (KIR) SMAN 5 KOTA CIREBON',
        period: '2022 - 2023',
        desc:'Mengelola absensi anggota, mencatat kehadiran, serta membantu administrasi kegiatan organisasi.',
      },
    ],
  },
  {
    title: '👩‍🎓Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'MIPA',
        company: 'SMAN 5 KOTA CIREBON',
        period: '2021 - 2024',
        desc: 'Menempuh pendidikan di bidang MIPA dengan mempelajari matematika, fisika, biologi, dan kimia',
      },
      {
       id: 'd1',
        role: 'S1 Informatika',
        company: 'Universitas Islam Negeri Siber Syekh Nurjati Cirebon',
        period: '2024 - 2028',
        desc: 'Mahasiswa Informatika yang mempelajari pengembangan aplikasi, pemprograman, dan teknologi digital.', 
      }
    ],
  },
];

const SOCIAL = [
  { id: 's1', label: 'GitHub', icon: '👷‍♀️', url: 'https://github.com/chantika-maharani' },
  { id: 's2', label: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/chantika-maharani-95739b39b/' },
  { id: 's3', label: 'Youtube', icon: '📷', url: 'https://www.youtube.com/@ChantikaMaharani-z2k' },
];

const COMPONENTS = [
  'View',
  'Text',
  'Image',
  'ScrollView',
  'FlatList',
  'SectionList',
  'TextInput',
  'Button',
  'TouchableOpacity',
  'Pressable',
  'Switch',
  'Modal',
  'ActivityIndicator',
  'StatusBar',
  'SafeAreaView',
  'StyleSheet',
  'Alert',
];

const SkillCard = ({ item }) => (
  <View style={styles.skillCard}>
    <View style={styles.skillHeader}>
      <Text style={styles.skillName}>{item.name}</Text>
      <Text style={styles.skillPercent}>{item.level}%</Text>
    </View>
    <View style={styles.progressBg}>
      <View
        style={[
          styles.progressFill,
          { width: `${item.level}%`, backgroundColor: item.color },
        ]}
      />
    </View>
  </View>
);

const TimelineCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.timelineCard}
    onPress={() => onPress(item)}
    activeOpacity={0.75}
  >
    <View style={styles.timelineDot} />

    <View style={styles.timelineContent}>
      <Text style={styles.timelineRole}>{item.role}</Text>
      <Text style={styles.timelineCompany}>{item.company}</Text>
      <Text style={styles.timelinePeriod}>{item.period}</Text>
      <Text style={styles.timelineHint}>Ketuk untuk detail</Text>
    </View>
  </TouchableOpacity>
);


export default function App() {
  const [openToWork, setOpenToWork] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const [sending, setSending] = useState(false);

  const [pressing, setPressing] = useState(false);

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSend = () => {
    if (!senderName.trim() || !senderMessage.trim()) {
      Alert.alert('⚠️ Peringatan', 'Nama dan pesan tidak boleh kosong.');
      return;
    }

    setSending(true);

    setTimeout(() => {
      setSending(false);
      Alert.alert(' ✅ Berhasil', `Pesan dari ${senderName} telah terkirim!`);
      setSenderName('');
      setSenderMessage('');
    }, 2000);
  };

  return (
    // 15. SafeAreaView area aman dari notch & home bar
    <SafeAreaView style={styles.safeArea}>

    {/* 14. StatusBar warna  latar statsus bar & style teks ikon
*/}
  <StatusBar backgroundColor="#2f2f6d" barStyle="light-content" />
     {/* ---- HEADER BAR ---- */}
     {/* 1. View → container header dengan flexDirection row */}
    <View style={styles.headerBar}>
      <Text style={styles.headerTitle}> 📄Curriculum Vitae</Text>

      {/* Toggle "Open to Work" */}
      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>
          {openToWork ? 'Open' : 'Busy'} 
        </Text>
        {/* 11. Switch → toggle on/off */}
        <Switch
          value={openToWork}
          onValueChange={setOpenToWork}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={openToWork ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </View>

    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

  {/* ================================================
      SECTION PROFIL
      Komponen: View, Text, Image
      ================================================ */}

  <View style={styles.profileSection}>

    {/* 3. Image → foto profil dari URL internet */}
    <Image
      source={{ uri: PROFILE.avatar }}
      style={styles.avatar}
      // resizeMode menentukan cara gambar menyesuaikan ukuran
      // 'cover' = memenuhi area (mungkin terpotong)
      // 'contain' = semua terlihat (mungkin ada ruang kosong)
    />

    {/* Conditional rendering: badge hanya tampil jika openToWork = true */}
    {openToWork && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>✅ Open to Work</Text>
      </View>
    )}

    {/* 2. Text → berbagai ukuran & weight */}
    <Text style={styles.profileName}>{PROFILE.name}</Text>
    <Text style={styles.profileTitle}>{PROFILE.title}</Text>
    <Text style={styles.profileBio}>{PROFILE.bio}</Text>

    {/* Info kontak dalam baris horizontal */}
    <View style={styles.contactRow}>
      <Text style={styles.contactItem}>📧 {PROFILE.email}</Text>
      <Text style={styles.contactItem}>📍 {PROFILE.location}</Text>
    </View>
    <Text style={styles.contactItem}> 📱 {PROFILE.phone}</Text>

    {/* 9. TouchableOpacity → tombol sosial media */}
    <View style={styles.socialRow}>
      {SOCIAL.map((s) => (
        <TouchableOpacity
          key={s.id}
          style={styles.socialBtn}
          onPress={() => Linking.openURL(s.url)}
          activeOpacity={0.8}
        >
          <Text style={styles.socialIcon}>{s.icon}</Text>
          <Text style={styles.socialLabel}>{s.label}</Text>
        </TouchableOpacity>
      ))}
    </View>


    {/* 10. Pressable → tombol dengan efek saat ditekan */}
    <Pressable
      // style bisa berupa fungsi yang menerima { pressed }
      style={({ pressed }) => [
        styles.downloadBtn,
        pressed && styles.downloadBtnPressed,  // style tambahan saat ditekan
      ]}
      onPressIn={() => setPressing(true)}
      onPressOut={() => setPressing(false)}
      onPress={() => Alert.alert('⬇️ Download', 'CV sedang diunduh...')}
    >
      <Text style={styles.downloadBtnText}>
        {pressing ? '⏳ Mengunduh...' : '⬇️  Download CV (PDF)'}
      </Text>
    </Pressable>
  </View>

  {/* Konten lanjutan di langkah berikutnya */}
  <View style={{height: 40}} />

<View style={styles.sectionBox}>
  <Text style={styles.sectionTitle}>🛠️ Skill Yang Sedang Dipelajari</Text>
  <Text style={styles.sectionSubtitle}>
    ↳ Daftar kemampuan dasar yang sedang saya kembangkan
  </Text>

  {/* 5. FlatList → daftar skill */}
  <FlatList
    data={SKILLS}                                    // array data
    keyExtractor={(item) => item.id}                 // key unik tiap item
    renderItem={({ item }) => <SkillCard item={item} />}  // render tiap item
    scrollEnabled={false}                             // scroll dihandle ScrollView di luar
    ItemSeparatorComponent={() => (                   // komponen pemisah antar item
      <View style={{ height: 8 }} />
    )}
  />
</View>

<View style={styles.sectionBox}>
  <Text style={styles.sectionTitle}>📋 Riwayat</Text>
  <Text style={styles.sectionSubtitle}>
    ↳ SectionList: data dikelompokkan per kategori. Ketuk kartu untuk Modal detail.
  </Text>

  {/* 6. SectionList → pengalaman & pendidikan */}
  <SectionList
    sections={SECTIONS}                              // array of { title, data[] }
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      // TimelineCard punya onPress untuk membuka Modal
      <TimelineCard item={item} onPress={handleCardPress} />
    )}
    // renderSectionHeader: header untuk tiap kelompok
    renderSectionHeader={({ section: { title } }) => (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    )}
    scrollEnabled={false}
    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
  />
</View>

<View style={styles.sectionBox}>
  <Text style={styles.sectionTitle}>📨 Hubungi Saya</Text>
  <Text style={styles.sectionSubtitle}>
    ↳ TextInput, Button, ActivityIndicator
  </Text>

  {/* 7. TextInput → input nama (single line) */}
  <TextInput
    style={styles.textInput}
    placeholder="Nama Anda"
    placeholderTextColor="#888"
    value={senderName}                        // nilai terkontrol dari state
    onChangeText={setSenderName}              // update state setiap ketik
    returnKeyType="next"                      // label tombol keyboard
    editable={!sending}                       // nonaktif saat loading
  />

  {/* 7. TextInput → input pesan (multiline = seperti textarea) */}
  <TextInput
    style={[styles.textInput, styles.textArea]}  // gabungkan 2 style
    placeholder="Tulis pesan Anda di sini..."
    placeholderTextColor="#888"
    value={senderMessage}
    onChangeText={setSenderMessage}
    multiline                    // aktifkan multiline
    numberOfLines={4}            // tinggi awal 4 baris
    textAlignVertical="top"      // teks mulai dari atas (Android)
    editable={!sending}
  />

  {/* Kondisi: tampilkan loading atau tombol kirim */}
  {sending ? (
    // 13. ActivityIndicator → spinner saat proses
    <View style={styles.loadingRow}>
      <ActivityIndicator size="large" color="#7c3aed" />
      <Text style={styles.loadingText}>Mengirim pesan...</Text>
    </View>
  ) : (
    // 8. Button → tombol standar React Native
    <Button
      title="📨  Kirim Pesan"
      color="#7c3aed"           // warna tombol
      onPress={handleSend}      // handler saat ditekan
    />
  )}
</View>

<View style={styles.sectionBox}>
  <Text style={styles.sectionTitle}>📚 Core Components yang Digunakan</Text>
  {COMPONENTS.map((component, index) => (
    <Text key={component} style={styles.componentItem}>
      {index + 1}. {component}
    </Text>
  ))}
</View>

<Modal
  visible={modalVisible}              // tampilkan jika true
  animationType="slide"               // animasi: 'slide', 'fade', 'none'
  transparent                         // latar transparan (overlay)
  onRequestClose={() => setModalVisible(false)}  // tombol back Android
>
  {/* Overlay gelap di belakang dialog */}
  <View style={styles.modalOverlay}>

    {/* Kotak dialog */}
    <View style={styles.modalBox}>
      {/* Render isi hanya jika ada item yang dipilih */}
      {selectedItem && (
        <>
          <Text style={styles.modalTitle}>{selectedItem.role}</Text>
          <Text style={styles.modalCompany}>{selectedItem.company}</Text>
          <Text style={styles.modalPeriod}>📅  {selectedItem.period}</Text>
          <View style={styles.modalDivider} />
          <Text style={styles.modalDesc}>{selectedItem.desc}</Text>
        </>
      )}

      {/* Tombol tutup modal */}
      <TouchableOpacity
        style={styles.modalCloseBtn}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.modalCloseBtnText}>✕  Tutup</Text>
      </TouchableOpacity>
    </View>

  </View>
</Modal>

</ScrollView>
</SafeAreaView>
  );
}

const COLORS = {
  bg: '#0f0f1a',              // latar belakang
  card: '#1a1a2e',              // kartu/panel
  cardBorder: '#2d2d44',      // border kartu
  accent: '#7c3aed',          // ungu utama
  accentLight: '#a78bfa',     // ungu muda
  accentGold: '#f59e0b',      // emas
  text: '#f0f0f0',            // teks utama
  textMuted: '#9ca3af',       // teks redup
  textDim: '#6b7280',         // teks sangat redup
  success: '#4ade80',         // hijau
  white: '#ffffff',
};


const styles = StyleSheet.create({

  // ── LAYOUT DASAR ──────────────────────────────
  safeArea: {
    flex: 1,                          // isi penuh layar
    backgroundColor: COLORS.bg,
  },
  scroll: {
    flex: 1,
  },

  headerBar: {
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',                    // anak tersusun horizontal
    justifyContent: 'space-between',         // ujung kiri & kanan
    alignItems: 'center',                    // rata tengah vertikal
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
    elevation: 4,                            // bayangan (Android)
    shadowColor: '#000',                     // bayangan (iOS)
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,                                  // jarak antar anak
  },
  switchLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },

  profileSection: {
    alignItems: 'center',                    // rata tengah horizontal
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: COLORS.card,
    marginBottom: 16,
    borderBottomLeftRadius: 24,              // sudut kiri bawah melengkung
    borderBottomRightRadius: 24,
    borderBottomWidth: 2,
    borderColor: COLORS.accent,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,                        // lingkaran (width/2)
    borderWidth: 3,
    borderColor: COLORS.accent,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#052e16',
    borderWidth: 1,
    borderColor: COLORS.success,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeText: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: '700',
  },
  profileName: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  profileTitle: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 14,
    textAlign: 'center',
  },
  profileBio: {
    color: COLORS.textMuted,
    fontSize: 13,
    lineHeight: 20,                          // tinggi tiap baris teks
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',                        // bungkus ke baris baru jika tidak muat
    justifyContent: 'center',
    gap: 8,
    marginBottom: 6,
  },
  contactItem: {
    color: COLORS.textMuted,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 4,
  },

socialRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    marginBottom: 20,
  },
  socialBtn: {
    alignItems: 'center',
    backgroundColor: '#16213e',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  socialIcon: { fontSize: 20, marginBottom: 4 },
  socialLabel: {
    color: COLORS.accentLight,
    fontSize: 11,
    fontWeight: '600',
  },

  downloadBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 50,                        // pill shape
    elevation: 4,
    shadowColor: COLORS.accent,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  downloadBtnPressed: {
    backgroundColor: '#5b21b6',              // lebih gelap saat ditekan
  },
  downloadBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
  },

  sectionBox: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionSubtitle: {
    color: COLORS.textDim,
    fontSize: 11,
    fontStyle: 'italic',
    marginBottom: 16,
  },
  componentItem: {
    color: COLORS.text,
    fontSize: 14,
    marginBottom: 6,
  },

  sectionHeader: {
    backgroundColor: '#0f172a',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },
  sectionHeaderText: {
    color: COLORS.accentLight,
    fontWeight: '700',
    fontSize: 13,
  },

skillCard: {
    backgroundColor: '#16213e',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  skillName:    { color: COLORS.text, fontWeight: '600', fontSize: 13 },
  skillPercent: { color: COLORS.accentLight, fontWeight: '700', fontSize: 13 },
  progressBg: {
    height: 6,
    backgroundColor: '#0f172a',
    borderRadius: 4,
    overflow: 'hidden',                      // clip anak yang melampaui batas
  },
  progressFill: {
    height: 6,
    borderRadius: 4,
    // width & backgroundColor diset secara inline (dinamis dari data)
  },

  timelineCard: {
    flexDirection: 'row',
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.accent,
    marginTop: 4,
    marginRight: 12,
  },
  timelineContent: { flex: 1 },
  timelineRole:    { color: COLORS.white, fontWeight: '700', fontSize: 14, marginBottom: 2 },
  timelineCompany: { color: COLORS.accentLight, fontSize: 13, marginBottom: 2 },
  timelinePeriod:  { color: COLORS.textMuted, fontSize: 11, marginBottom: 6 },
  timelineHint:    { color: COLORS.accentGold, fontSize: 11, fontStyle: 'italic' },
  textInput: {
    backgroundColor: '#0f172a',
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 10,
    paddingHorizontal: 14,
    // Platform.OS membedakan iOS dan Android
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    fontSize: 14,
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',                // teks mulai dari atas (Android)
  },

loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 10,
  },
  loadingText: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: '600',
  },

 modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',     // hitam transparan
    justifyContent: 'flex-end',              // konten di bawah
  },
  modalBox: {
    backgroundColor: '#1e1b4b',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 28,
    borderTopWidth: 3,
    borderColor: COLORS.accent,
  },
  modalTitle:   { color: COLORS.white, fontSize: 20, fontWeight: '800', marginBottom: 4 },
  modalCompany: { color: COLORS.accentLight, fontSize: 15, fontWeight: '600', marginBottom: 4 },
  modalPeriod:  { color: COLORS.textMuted, fontSize: 13, marginBottom: 16 },
  modalDivider: { height: 1, backgroundColor: COLORS.cardBorder, marginBottom: 16 },
  modalDesc:    { color: COLORS.text, fontSize: 14, lineHeight: 22, marginBottom: 24 },
  modalCloseBtn: {
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  modalCloseBtnText: { color: COLORS.white, fontWeight: '700', fontSize: 14 },
});

