import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import TextAtom from '@/components/atoms/text/TextAtom'
import { styles } from './style'

const ButtonDetail = () => {
    return (
        <View style={styles.contentWrapperSecond}>
            <TouchableOpacity style={styles.btnPrimary}>
                <TextAtom fontColor='onPrimary' fontSize='large'>Add to cart</TextAtom>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonDetail

