import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import TextAtom from '@/components/atoms/text/TextAtom'


interface HeaderProfilProps {
    uri: string,
    name: string,
    email: string
}
const HeaderProfil: React.FC<HeaderProfilProps> = ({uri, name, email}) => {
    return (
        <View style={styles.mainProfil}>
            <View style={styles.imgProfil}>
                <Image
                    source={{
                        uri,
                    }}
                    style={styles.image}
                />
            </View>
            <View style={styles.detailProfil}>
                <TextAtom fontColor='primary' fontSize='extraLarge3'>{name}</TextAtom>
                <TextAtom fontColor='muted' fontSize='medium' >{email}</TextAtom>
            </View>
        </View>
    )
}

export default HeaderProfil

