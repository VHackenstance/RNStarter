import { StyleSheet } from 'react-native'

// SCREEN STYLES
const styles = StyleSheet.create({
    button_container: {
        backgroundColor: '#fff',
        gap: 10,
        paddingTop: 10,
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    flatlistItemContainer: {
        marginHorizontal: 10,
        marginVertical: 40,
    },
    homeContainer: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20
    },
    H1_b: {
        fontSize: 30,
        fontWeight: "bold",
    },
    H2_b: {
        fontSize: 24,
        fontWeight: "bold",
    },
    p_b: {
        fontSize: 18,
        fontWeight: "bold",
    },
    TO_button: {
        alignItems: 'center',
        backgroundColor: '#2ba0fb',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    TO_buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;