import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './style'

const ImageDetail = () => {
    return (
        <View style={styles.imgCard}>
            <Image src={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'} style={styles.img} />
        </View>
    )
}

export default ImageDetail

