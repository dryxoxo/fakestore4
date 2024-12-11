import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Card from '@/components/molecules/card/Card'
import LayoutPage from '@/components/atoms/layout/LayoutPage'
import { StatusBar } from 'expo-status-bar'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { fetchAllProduct } from '@/redux/slice/productSlice'
import { RootState } from '@/redux/store'
import { getUserCart } from '@/api/cart'
import { fetchCartWithProducts } from '@/redux/slice/cartSlice'

const CardProduct = () => {
    const dispatch = useAppDispatch()
    const dataProducts = useAppSelector((state: RootState) => state.product.data)

    const fetchData = () => {
        dispatch(fetchAllProduct())
        dispatch(fetchCartWithProducts(2))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <LayoutPage>
            <StatusBar style='dark' />
            <ScrollView>
                <View style={styles.container}>
                    {dataProducts.map(({ id, title, price, category, image }) => (
                        <Card
                            key={id}
                            title={title}
                            price={price}
                            category={category}
                            url={image}
                        />
                    ))}
                </View>
            </ScrollView>
        </LayoutPage>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }
})
export default CardProduct