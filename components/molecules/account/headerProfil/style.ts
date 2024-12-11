import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({
    mainProfil: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 25,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },
    imgProfil: {
        height: 65,
        width: 65,
        borderRadius: 65 / 2,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    detailProfil: {
        flexDirection: 'column',
        gap: 5,
    },
})