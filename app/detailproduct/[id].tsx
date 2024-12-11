import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'
import DetailProductPage from '@/components/pages/DetailProductPage'
import { Stack } from 'expo-router'

const IdCard = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    return (
        <>
            <Stack.Screen options={{ headerTitle: 'Detail Produk' }} />
            <DetailProductPage />
        </>
    )
}

export default IdCard

const styles = StyleSheet.create({})