import React from 'react';
import { Image, View, Text } from 'react-native';
import style from './style';

const Avatar = ({avatar, name}) => {
    if (avatar) {
        return (
            <Image 
                style={style.image}
                source={avatar}/>
        );
    } else {
        return (
            <View style={style.cycle}>
               <Text style={style.text}>{name[0].toUpperCase()}</Text> 
            </View>
        );
    }
};

export default Avatar;