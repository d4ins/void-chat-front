import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Avatar from '../Avatar';
import style from './style';
import {get} from '../../service/RequestController';
import {Menu, MenuTrigger, MenuOption, MenuOptions} from 'react-native-popup-menu';


const Chat = ({navigation, id, chatName, avatar, loadingToggle, chatAddInfo, users, open}) => {

    const openMenu = () => {
        open(id);
    };

    const openChat = () => {
   
        if(!users) {
            loadingToggle();
            get(`/chat/${id}`)
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
            onLongPress={openMenu}
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

            <Menu
                name={id}>
                <MenuTrigger/>
                <MenuOptions>
                    <MenuOption>
                        <Text style={style.menuItem}>Delete chat</Text>
                    </MenuOption>

                    <MenuOption>
                        <Text style={style.menuItem}>Fix chat</Text>
                    </MenuOption>

                    <MenuOption>
                        <Text style={style.menuItem}>Sound Off</Text>
                    </MenuOption>                        
                </MenuOptions>
            </Menu>
        </TouchableOpacity>
    );
};

export default Chat;
