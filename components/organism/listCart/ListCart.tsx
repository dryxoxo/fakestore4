import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Cart from '@/components/molecules/cart/Cart'
import ButtonCart from '@/components/molecules/cart/ButtonCart'
import LayoutPage from '@/components/atoms/layout/LayoutPage'
import { StatusBar } from 'expo-status-bar'
import { cartData } from '@/constants/data/cartData'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { RootState } from '@/redux/store'
import { fetchAllProduct } from '@/redux/slice/productSlice'
import { fetchCartWithProducts } from '@/redux/slice/cartSlice'

const ListCart = () => {
    const dataCart = useAppSelector((state: RootState) => state.cart.cart?.products)
    const dispatch = useAppDispatch()

    const fetchData = () => {
        dispatch(fetchAllProduct())
        dispatch(fetchCartWithProducts(3))
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    useEffect(() => {
        console.log("data dari cart", dataCart)
    }, [dataCart])

    return (
        <View>
            <StatusBar style='dark' />
            <ScrollView>
                <View style={styles.container}>
                    {cartData.map(({ id, title, price, category, image }) => (
                        <Cart key={id} title={title} uri={image} price={price} category={category} id={id} />
                    ))}
                </View>
            </ScrollView>
            <ButtonCart />
        </View>
    )
}

export default ListCart

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#FFF',
        flexWrap: 'wrap',
        paddingHorizontal: 20
    },
    scrollContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}
