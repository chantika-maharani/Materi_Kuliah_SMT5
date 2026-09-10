import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>BIODATA MAHASISWA INFORMATIKA</Text>

      <Text>Nama lengkap : Chantika Maharani</Text>
      <Text>Tempat, Tanggal lahir : Cirebon, 20 September 2005</Text>
      <Text>Cita-Cita : Data Analyst / Data Scientist</Text>
      <Text>Rencana Hidup : Kerja di Google</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e26c94',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
