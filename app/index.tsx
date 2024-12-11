import TextAtom from '@/components/atoms/text/TextAtom';
import Toast from '@/components/atoms/toast/Toast';
import Card from '@/components/molecules/card/Card';
import Cart from '@/components/molecules/cart/Cart';
import CardProduct from '@/components/organism/cardProducts/CardProduct';
import ListCart from '@/components/organism/listCart/ListCart';
import AccountPage from '@/components/pages/AccountPage';
import DetailProductPage from '@/components/pages/DetailProductPage';
import ListCartPages from '@/components/pages/ListCartPages';
import ProductPage from '@/components/pages/ProductPage';
import { Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


export default function Tab() {
  return (
    <Redirect href="/(tabs)/products" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#FFF',
    flexWrap: 'wrap',
    paddingTop: 20,
  },
  scrollContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
