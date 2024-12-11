import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  contentWrapperSecond: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    paddingHorizontal: 25,
    backgroundColor: '#FFF'
  },
  // btnPrimary: {
  //   backgroundColor: '#53B175',
  //   width: '100%',
  //   borderRadius: 19,
  //   paddingVertical: 24,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: 24,
  //   marginBottom: 24,
  // },
  btnPrimary: {
    flexDirection: 'row', // Mengganti display: flex
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53B175', // Warna hijau
    color: '#FFFFFF', // Warna teks
    borderWidth: 0, // Tidak ada border
    borderRadius: 30, // Membuat ujung tombol membulat
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 24,
    marginBottom: 24,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Untuk bayangan di Android
    width: '100%',
  },
})