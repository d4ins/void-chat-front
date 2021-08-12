import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    screen: {
        paddingTop: 25,
        paddingHorizontal: 20,
        flex: 1,
    },
    inputs: {
        height: 100,
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'flex-start',
    },
    button: {
        marginTop: 30,
        width: '90%',
        height: 40,
        backgroundColor: '#63169E',
        borderRadius: 30
    },
    buttonTitle: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#C4C4C4'
    }
});