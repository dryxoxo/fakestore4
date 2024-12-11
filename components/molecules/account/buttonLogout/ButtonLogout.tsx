import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextAtom from '@/components/atoms/text/TextAtom'

const ButtonLogout = () => {
    return (
        <View style={styles.buttonLogout}>
            <TouchableOpacity style={styles.btn}>
                <TextAtom fontSize='extraLarge' fontColor='success'>Log Out</TextAtom>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonLogout

const styles = StyleSheet.create({
    buttonLogout: {
        width: '100%',
        padding: 20,
    },
    btn: {
        backgroundColor: '#F2F3F2',
        borderRadius: 19,
        paddingVertical: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
})