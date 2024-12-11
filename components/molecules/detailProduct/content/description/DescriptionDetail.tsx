import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextAtom from '@/components/atoms/text/TextAtom'
import { styles } from './style'

const DescriptionDetail = () => {
    return (
        <View style={styles.contentWrapper}>
            <TextAtom fontColor='muted' fontSize='medium' wrap='no'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sapiente quae doloribus provident magni saepe nobis repellendus, deleniti ut. Facilis illo itaque perspiciatis quod pariatur aspernatur voluptate dolore iure impedit!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea facilis rerum veritatis fuga sit porro nisi possimus esse alias qui enim ut officia beatae harum animi, quaerat temporibus! Totam, ratione? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, eveniet? Iste, necessitatibus minima commodi architecto ducimus sequi ipsa, sunt, repellendus assumenda nostrum quo laboriosam optio cum velit veritatis praesentium itaque!</TextAtom>
        </View>
    )
}

export default DescriptionDetail

