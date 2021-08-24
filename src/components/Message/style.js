import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    wrapper: {
        marginTop: 5,
        minHeight: 40,
        flexDirection: 'row'
    },
    right: {
        justifyContent: 'flex-end'
    },
    left: {
        justifyContent: 'flex-start'
    },
    message: {
        alignSelf: 'flex-start' ,
        maxWidth: '48%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        minHeight: 40,
        backgroundColor: '#aaa',

    },
    messageRight: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    messageLeft: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15

    },
    container: {
        
    },
    menuItem: {

    }
});

export default style;