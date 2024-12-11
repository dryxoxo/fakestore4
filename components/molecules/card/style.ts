import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    cardContainer: {
        width: (width / 2) - 20,
        height: 'auto',
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#E2E2E2',
        borderRadius: 16,
        marginTop: 10,
    },
    cardImageContainer: {
        width: '100%',
        justifyContent: 'center',
        aspectRatio: 1 / 1, // Rasio lebar: tinggi = 2:1
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 10
    },
    cardTitle: {
        flexDirection: 'column',
        borderStyle: 'solid',
        marginTop: 10,
        marginHorizontal: 15,
        gap: 5,
    },
    cardAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 15,
    },
})