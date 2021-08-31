import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingTop: 25,
        flex: 1,
        alignItems: 'center'
    },
    inputs: {
        height: 100,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    input: {
        fontFamily: 'roboto-regular',
        width: '100%',
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        height: 40,
        paddingHorizontal: 25,
        fontSize: 14
    },
    button: {
        marginBottom: 20,
        width: '90%',
        height: 45,
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
    },
    label: {
        flex: 1,
        marginTop: 25 ,
        flexDirection: 'row',
    },
    text: {
        fontFamily: 'roboto-medium',
        color: '#7A7A7A',
    },
    switcher: {
        color: '#30a8a1',
        fontFamily: 'roboto-light',
        marginLeft: 5
    }
});