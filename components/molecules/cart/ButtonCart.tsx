import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './Style'
import TextAtom from '@/components/atoms/text/TextAtom'

const ButtonCart = () => {
    return (
        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.checkoutButton}>
                <TextAtom fontSize='large' fontColor='onPrimary'>Go to Checkout</TextAtom>
                <View style={styles.priceContainer}>
                    <TextAtom fontSize='large' fontColor='onPrimary'>$12.96</TextAtom>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonCart