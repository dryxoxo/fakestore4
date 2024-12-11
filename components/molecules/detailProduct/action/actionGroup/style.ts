import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
    },
    actionGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    btnAction: {
        padding: 10,
        backgroundColor: '#FFF',
    },
    inputNumber: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 17,
        textAlign: 'center',
      },
})