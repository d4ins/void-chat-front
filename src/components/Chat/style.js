import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    wrapper: {
        height: 80,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#DDD0D0',
        borderBottomWidth: 1
    },
    info: {
        width: '57%'
    },
    chatName: {
        fontFamily: 'roboto-bold'
    },
    message: {
        fontFamily: 'roboto-light',
        color: '#7A7A7A'
    },
    subInfo: {
        height: '65%',
        width: '23%',
        justifyContent: 'space-between'
    },
    menuItem: {
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 1
    },
    date: {
        fontFamily: 'roboto-light',
        color: '#7A7A7A',
        fontSize: 12,
        textAlign: 'center'
    },
    icons: {
        paddingHorizontal: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    counter: {
        borderRadius: 100,
        height: 18,
        minWidth: 18,
        padding: 5,
        backgroundColor: '#BA4090',
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontFamily: 'roboto-regular',
        fontSize: 9,
        color: '#fff'
    }
});

export default style;