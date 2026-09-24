## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Memahami dan menggunakan **16 Core Components** React Native
2. Menerapkan **StyleSheet** untuk styling terpusat
3. Menggunakan **useState** untuk state management dasar
4. Membuat layout yang responsif dengan **Flexbox**
5. Menangani **interaksi pengguna** (tekan, input, scroll)

Langkah 1 : Menginpor Components

1. Buka file App.js pada folder projek ptmn2
2. inport 16 core components sebagai berikut :
3. Konfirmasi Bukti


   ![alt text](image-1.png)

Langkah 2 : Menyiapkan data objek dan array

1. Membuat objek untuk menyimpan data profile
2. Buat objek array bernama PROFILE
3. Konfirmasi Bukti


![alt text](image-2.png)
   
4. Membuat objek array SKILLS untuk menyimpan data SKILLS
5. Buat objek array bernama SKILLS
6. Konfirmasi bukti


![alt text](image-3.png)

7. Membuat objek array SECTION untuk menyimpan riwayat pekerjaan
8. Mmebuat Objek Array SOCIAL untuk menampung akun media sosial
9. Konfirmasi Bukti Section


![alt text](image-30.png)


10. Konfirmasi Bukti Sosial Media

![alt text](image-5.png)  

Langkah 3 : Membuat Sub-Components

1. Membuat komponen SkillCard untuk menampilkan satu item data skill.
2. Membuat komponen TimelineCard untuk menampilkan satu item riwayat.
3. Menerapkan component reuse pada komponen SkillCard dan TimelineCard.
4. Konfirmasi Bukti SkillCard

  ![alt text](image-6.png)

Langkah 4 : State Management dengan useState

1. Menambahkan useState untuk menyimpan data yang dapat berubah pada aplikasi.
2. Membuat state selectedItem untuk menyimpan data yang dipilih.
3. Membuat state modalVisible untuk mengatur tampilan modal.
4. Menambahkan state loading untuk mengatur status proses loading.
5. Konfirmasi Bukti

   ![alt text](image-7.png)
   


Langkah 5 : Membuat SafeAreaView, StatusBar, dan Header

1. Menggunakan SafeAreaView untuk memastikan tampilan tidak tertutup notch atau home indicator.
2. Menggunakan StatusBar untuk mengatur tampilan status bar pada perangkat.
3. Membuat header bar menggunakan View.
4. Menambahkan Switch pada header untuk mengatur status Open to Work.
5. Mengatur flexDirection: 'row' agar elemen pada header tersusun secara horizontal.
6. Konfirmasi Bukti

 ![alt text](image-8.png)

 ![alt text](image-9.png)

Langkah 6 : Membuat ScrollView dan Profil Section

1. Membuat ScrollView untuk membungkus seluruh konten CV agar dapat di-scroll.
2. Membuat profil section menggunakan View dan Text.
3. Menampilkan foto profil menggunakan Image dari URL.
4. Menampilkan nama, jabatan, dan bio pada profil.
5. Membuat tombol media sosial menggunakan TouchableOpacity dan Pressable.
6. Konfirmasi Bukti

![alt text](image-10.png)

Langkah 7 : Membuat FlatList untuk Menampilkan Daftar Skills

1. Membuat section skills menggunakan View dan Text.
2. Menggunakan FlatList untuk menampilkan data dari array SKILLS.
3. Menggunakan keyExtractor untuk memberikan key unik pada setiap item.
4. Menggunakan renderItem untuk menampilkan setiap skill melalui komponen SkillCard.
5. Menambahkan pemisah antar item menggunakan ItemSeparatorComponent.
6. Mengatur scrollEnabled={false} agar scrolling tetap menggunakan ScrollView utama.
7. Konfirmasi Bukti

   ![alt text](image-11.png)

Langkah 8 : Membuat SectionList untuk Pengalaman dan Pendidikan

1. Membuat section riwayat menggunakan SectionList.
2. Menggunakan SECTIONS sebagai sumber data yang terdiri dari beberapa kategori.
3. Menggunakan keyExtractor untuk memberikan key unik pada setiap item.
4. Menggunakan renderItem untuk menampilkan data melalui komponen TimelineCard.
5. Menggunakan renderSectionHeader untuk menampilkan judul setiap kategori.
6. Menambahkan ItemSeparatorComponent sebagai pemisah antar item.
7. Konfirmasi Bukti

  ![alt text](image-12.png)

Langkah 9 : Membuat Form Kontak dengan TextInput, Button, dan ActivityIndicator

1. Membuat section form kontak untuk menerima nama dan pesan dari pengguna.
2. Menggunakan TextInput untuk membuat input nama dan pesan.
3. Menghubungkan nilai input dengan state menggunakan value dan onChangeText.
4. Menambahkan Button untuk menjalankan proses pengiriman pesan.
5. Menggunakan ActivityIndicator untuk menampilkan indikator loading saat pesan sedang diproses.
6. Konfirmasi Bukti

 ![alt text](image-13.png)


Langkah 10 : Membuat Modal untuk Detail Riwayat

1. Menambahkan Modal untuk menampilkan detail pengalaman atau pendidikan yang dipilih.
2. Mengatur tampilan modal menggunakan prop visible berdasarkan state modalVisible.
3. Menggunakan animationType untuk memberikan animasi saat modal ditampilkan.
4. Mengatur transparent agar modal memiliki tampilan overlay di atas halaman.
5. Menampilkan informasi dari selectedItem pada modal.
6. Menambahkan tombol Tutup untuk menutup modal.
7. Konfirmasi Bukti

 ![alt text](image-14.png)

Langkah 11 : Membuat StyleSheet untuk Styling Terpusat

1. Membuat konstanta palet warna untuk mengatur warna yang digunakan pada aplikasi.
2. Menggunakan StyleSheet.create() untuk mengatur seluruh style komponen secara terpusat.
3. Mengatur style untuk berbagai bagian aplikasi seperti header, profil, sosial media, tombol, section, skill, timeline, form input, loading, dan modal.
4. Konfirmasi Bukti Palet Warna
   Menampilkan konstanta warna yang digunakan sebagai acuan warna pada aplikasi.

   ![alt text](image-15.png)

5. Konfirmasi Bukti StyleSheet Utama
   Menampilkan penggunaan StyleSheet.create() sebagai tempat pengaturan style aplikasi.

   ![alt text](image-16.png)

6. Konfirmasi Bukti Header Bar
   Menampilkan pengaturan style untuk bagian header aplikasi.

   ![alt text](image-17.png)

7. Konfirmasi Bukti Section Profil
   Menampilkan pengaturan style untuk foto, nama, informasi profil, dan bagian kontak.

  ![alt text](image-18.png)

  ![alt text](image-20.png)



8. Konfirmasi Bukti Sosial Media
   Menampilkan pengaturan style untuk tombol media sosial.

  ![alt text](image-21.png)

  
9. Konfirmasi Bukti Tombol Download
   Menampilkan pengaturan style untuk tombol Download CV dan efek saat ditekan.

   ![alt text](image-22.png)

10. Konfirmasi Bukti Section Box
    Menampilkan pengaturan style untuk wrapper atau kartu pada setiap section.

  ![alt text](image-23.png)


11. Konfirmasi Bukti Section List Header
    Menampilkan pengaturan style untuk header kategori pada SectionList.

    ![alt text](image-24.png)


12. Konfirmasi Bukti Skill Card
    Menampilkan pengaturan style untuk kartu skill dan progress bar.

    ![alt text](image-25.png)


13. Konfirmasi Bukti Timeline Card
    Menampilkan pengaturan style untuk kartu pengalaman dan pendidikan.

   ![alt text](image-26.png)


14. Konfirmasi Bukti Text Input
    Menampilkan pengaturan style untuk input nama dan pesan pada form kontak.

    ![alt text](image-27.png)
    
15. Konfirmasi Bukti Loading Row
    Menampilkan pengaturan style untuk bagian indikator loading saat pesan dikirim.

    ![alt text](image-28.png)
   
16. Konfirmasi Bukti Modal
    Menampilkan pengaturan style untuk popup detail riwayat dan tombol tutup.

    ![alt text](image-29.png)
    

BUKTI APLIKASI SUDAH JADI

![alt text](cv_chantika.gif)