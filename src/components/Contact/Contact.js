import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Avatar from '../Avatar';
import Online from '../Online';
import style from './style';

const Contact = ({avatar, desc, email, fullName, id, online}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={style.wrapper}>
            
            <View>
                <Avatar 
                    avatar={avatar}
                    name={fullName}/>
                    <Online 
                        online={online}
                        pos={{
                            right: 2,
                            bottom: 2
                        }}/>
            </View>
            
            <Text>{fullName}</Text>
        </TouchableOpacity>
    );
};

export default Contact;