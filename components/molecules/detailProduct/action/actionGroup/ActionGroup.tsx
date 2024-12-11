import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Decrement, Increment } from '@/constants/icons'
import TextAtom from '@/components/atoms/text/TextAtom'

const ActionGroup = () => {
    return (
        <View style={styles.contentWrapper}>
            <View style={styles.actionGroup}>
                <TouchableOpacity style={styles.btnAction}>
                    <Increment width={25} height={25} />
                </TouchableOpacity>
                <TextInput style={styles.inputNumber} keyboardType="numeric" value={'12'} />
                <TouchableOpacity style={styles.btnAction}>
                    <Decrement width={25} height={25} />
                </TouchableOpacity>
            </View>
            <TextAtom fontColor='primary' fontSize='large'>$12</TextAtom>
        </View>
    )
}

export default ActionGroup

