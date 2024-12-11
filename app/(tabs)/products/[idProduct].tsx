import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailProductPage from '@/components/pages/DetailProductPage'
import { Stack, useLocalSearchParams } from 'expo-router'

const DetailProduct = () => {
  const { idProduct } = useLocalSearchParams<{ idProduct: string }>()

  return (
    <>
    <Stack.Screen options={{ headerTitle: 'Detail Product' }} />
    <DetailProductPage />
    </>
  )
}

export default DetailProduct

const styles = StyleSheet.create({})