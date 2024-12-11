import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductPage from '@/components/pages/ProductPage'
import ListCartPages from '@/components/pages/ListCartPages'
import { getUserCart } from '@/api/cart'
import { AxiosResponse } from 'axios'

const Index = () => {

  const [data, setData] = useState<AxiosResponse<any, any> | null>(null);
  const handleData = async () => {
    try {
      const response = await getUserCart(2);
      if (response) {
        setData(response.data); // Hanya menyimpan bagian data
      }
    } catch (error) {
      console.error("Failed to fetch user cart:", error);
    }
  };

  useEffect(() => {
    handleData()

    console.log(data)
  }, [])

  return (
    <ListCartPages />
  )
}

export default Index

const styles = StyleSheet.create({})