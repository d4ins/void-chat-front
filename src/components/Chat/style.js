import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    wrapper: {
        height: 75,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#DDD0D0',
        borderBottomWidth: 1
    },
    info: {
        width: '80%'
    },
    chatName: {
        fontFamily: 'roboto-bold'
    },
    message: {
        fontFamily: 'roboto-light',
        color: '#7A7A7A'
    },
    subInfo: {

    },
    menuItem: {
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default style;