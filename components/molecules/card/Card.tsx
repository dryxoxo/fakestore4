import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import TextAtom from '@/components/atoms/text/TextAtom'
import { styles } from './style'
import ButtonAtom from '@/components/atoms/button/ButtonAtom'
import { Link, router } from 'expo-router'

interface CardProps {
    title: string,
    url?: string,
    price: string,
    category: string
}

const Card: React.FC<CardProps> = ({title, url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNwitOkVehY1hzubk6LHbM6T4JLxZ-VXYJG1ufypJiFosTCUdOTkXVpUo2wfGc2nlY3Q&usqp=CAU', price, category}) => {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={[styles.cardImageContainer]} onPress={()=>router.push('/detailproduct/2')}>
                <Image style={styles.cardImage} src={url} />
            </TouchableOpacity>
            <View style={styles.cardTitle}>
                <TextAtom fontSize='extraLarge' fontColor='primary' wrap='yes'>{title}</TextAtom>
                <TextAtom fontSize='medium' fontColor='muted'>{category}</TextAtom>
            </View>
            <View style={styles.cardAction}>
                <TextAtom fontSize='extraLarge3' fontColor='primary'>$ {price}</TextAtom>
                <ButtonAtom variant='buttonAdd'><TextAtom fontSize='medium' fontColor='onPrimary'>+</TextAtom></ButtonAtom>
            </View>
        </View>
    )
}

export default Card