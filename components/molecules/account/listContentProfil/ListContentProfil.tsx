import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import TextAtom from '@/components/atoms/text/TextAtom'
import { Arrow } from '@/constants/icons'

interface ListContentProfilProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: String
}

const ListContentProfil: React.FC<ListContentProfilProps> = ({ Icon, text }) => {
    return (
        <View style={styles.listWrapper}>
            <View style={styles.listContent}>
                <Icon
                    width={25}
                    height={25}
                />
                <TextAtom fontSize='extraLarge' fontColor='primary'>{text}</TextAtom>
            </View>
            <Arrow
                width={25}
                height={25}
            />
        </View>
    )
}

export default ListContentProfil
