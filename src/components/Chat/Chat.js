import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Avatar from '../Avatar';
import style from './style';
import {_apiBase} from '../../constants';

const Chat = ({navigation, id, chatName, avatar, loadingToggle, chatAddInfo, users}) => {
    const getChat = async () => {
        const res = await fetch(`${_apiBase}/chat/${id}`);

        return res.json();
    }; 

    const openChat = () => {
   
        if(!users) {
            loadingToggle();
            getChat()
                .then(({users, messages}) => {
    
                    chatAddInfo(users, messages, id);
    
                    navigation.navigate('Chat', {id});
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    loadingToggle();
                });
        } else {
            navigation.navigate('Chat', {id});
        }

    };
    return (
        <TouchableOpacity
            onPress={openChat}
            activeOpacity={0.8}
            style={style.wrapper}>
            <Avatar avatar={avatar} name={chatName}/>
            <View style={style.info}>
                <Text style={style.chatName}>{chatName}</Text>
                <Text style={style.message}>It`s test message</Text>
            </View>
            <View style={style.subInfo}>

            </View>
        </TouchableOpacity>
    );
};

export default Chat;
