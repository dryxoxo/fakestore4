import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LayoutPage from '../atoms/layout/LayoutPage'
import ListCart from '../organism/listCart/ListCart'

const ListCartPages = () => {
  return (
    <LayoutPage>
        <ListCart />
    </LayoutPage>
  )
}

export default ListCartPages