import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Avatar from '../Avatar';
import style from './style';
import { AntDesign } from '@expo/vector-icons'; 

const formateDate = (date) => {
    const time = new Date(date);

    if(new Date().getTime() - time.getTime() < 86400000) {     
        const minutes = time.getMinutes() > 9? time.getMinutes(): `0${time.getMinutes()}`;
        const hours = time.getHours() > 9? time.getHours(): `0${time.getHours()}`;

        return `${hours}: ${minutes}`;
    } else {
        if(new Date().getTime() - time.getTime() < 2592000000 ) {   
            return time.toLocaleString('en-us', {weekday:'long'}).slice(0, 2);
        } else {
            return 'Mounth ago';
        }
    }

};

const Chat = ({navigation, id, chatName, avatar, fixed,  messages}) => {
    const openChat = () => {
        navigation.navigate('Chat', {id});
    };

    const text = messages[messages.length - 1].text.length > 13? messages[messages.length - 1].text.slice(0, 14): messages[messages.length - 1].text;

    return (
        <TouchableOpacity
            onPress={openChat}
            activeOpacity={0.8}
            style={style.wrapper}>
            <Avatar avatar={avatar} name={chatName}/>
            <View style={style.info}>
                <Text style={style.chatName}>{chatName}</Text>
                <Text style={style.message}>{text}</Text>
            </View>
            <View style={style.subInfo}>
                <Text style={style.date}>{formateDate(messages[messages.length - 1].created)}</Text>
                <View style={style.icons}>
                    <View style={style.counter}> 
                            <Text style={style.number}>{messages.length}</Text>
                    </View>
                    {
                    fixed ? <AntDesign 
                                name='pushpin' 
                                size={24} 
                                color='#7D7D7D'
                                style={{
                                    transform: [{rotateY: '180deg'}]
                                }}/> : null
                    }
 
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Chat;
