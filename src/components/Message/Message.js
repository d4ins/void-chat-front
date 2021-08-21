import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import style from './style';

const Message = ({text, isMy}) => {

    return (
        <TouchableOpacity
            style={[style.wrapper, isMy ? style.right: style.left]}
            onPress={() => console.log('press')}
            activeOpacity={0.8}>
            <View style={[style.message, isMy? style.messageRight: style.messageLeft]}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Message;