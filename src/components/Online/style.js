import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    circle: {
        width: 12,
        height: 12,
        borderRadius: 100,
        position: 'absolute'
    },
    online: {
        backgroundColor: 'green'
    },
    offline: {
        backgroundColor: 'gray'
    }
});

export default style;