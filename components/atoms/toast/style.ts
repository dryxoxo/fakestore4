import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerToast: {
        position: 'absolute',
        width: '100%',
        height: 50,
        zIndex: 1,
        flexDirection: 'row',
        marginTop: 50,
        alignItems: 'center',
        gap: 5,
        paddingHorizontal: 10
    },
    content: {
        alignItems: 'center',
        marginVertical: 'auto',
        marginLeft: 10,
        gap: 5,
        flexDirection: 'row'
    },
    text: {
        fontSize: 16,
        color: '#fff',
    }
})