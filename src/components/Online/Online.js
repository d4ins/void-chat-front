import React from 'react';
import { View } from 'react-native';
import style from './style';

const Online = ({online, pos}) => {
    return (
        <View style={[style.circle, online? style.online: style.offline, pos]} />
    );
};

export default Online;