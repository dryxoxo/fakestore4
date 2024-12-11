import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  cardImg: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  cardRowFirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardRowSecond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    flexDirection: 'column',
    gap: 5,
    marginBottom: 5
  },
  cardActionButton: {
    flexDirection: 'row',
    gap: 17,
    alignItems: 'center',
  },
  btnCart: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#FFF',
    padding: 20,
  },
  priceContainer: {
    backgroundColor: '#499D5A', // Warna hijau yang lebih gelap untuk kontainer harga
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  checkoutButton: {
    flexDirection: 'row', // Mengganti display: flex
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#53B175', // Warna hijau
    color: '#FFFFFF', // Warna teks
    borderWidth: 0, // Tidak ada border
    borderRadius: 30, // Membuat ujung tombol membulat
    paddingVertical: 15,
    paddingHorizontal: 30,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Untuk bayangan di Android
    width: '100%',
  },
})