import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './Style'
import TextAtom from '@/components/atoms/text/TextAtom'
import { Decrement, Increment } from '@/constants/icons'
import { router } from 'expo-router'


interface cartProps {
    id: number,
    uri: string,
    title: string,
    category: string,
    price: number,
}

const Cart: React.FC<cartProps> = ({ id, uri, title, category, price }) => {

    const handleDirect = (id: number) => {
        router.push(`/detailproduct/${id}`)
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.cardImg} onPress={() => handleDirect(id)}>
                <Image
                    style={styles.image}
                    src={uri}
                />
            </TouchableOpacity>
            <View style={styles.cardContent}>
                <View style={styles.cardRowFirst}>
                    <TouchableOpacity style={styles.cardTitle} onPress={() => handleDirect(id)}>
                        <TextAtom fontColor='primary' fontSize='extraLarge2'>{title}</TextAtom>
                        <TextAtom fontColor='muted' fontSize='medium'>{category}</TextAtom>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextAtom fontSize='medium' fontColor='muted'>X</TextAtom>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardRowSecond}>
                    <View style={styles.cardActionButton}>
                        <TouchableOpacity style={styles.btnCart}>
                            <Decrement width={30} height={30} />
                        </TouchableOpacity>
                        <TextAtom fontSize='medium' fontColor='primary'>12</TextAtom>
                        <TouchableOpacity style={styles.btnCart}>
                            <Increment width={30} height={30} />
                        </TouchableOpacity>
                    </View>
                    <TextAtom fontSize='large' fontColor='primary'>{price}</TextAtom>
                </View>
            </View>
        </View>
    )
}

export default Cart