import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {Menu, MenuTrigger, MenuOption, MenuOptions} from 'react-native-popup-menu';
import style from './style';
import { post } from '../../service/RequestController';

const optionsStyles = {
    optionsContainer: {
        width: 100
    }
};

const Message = ({text, isMy, id, chatId, open, messageRemove, created}) => {
    const remove = () => {
        
        post(JSON.stringify({id}),'/message/remove')
            .then(({removed, messageId}) => {
                if (removed) {
                    messageRemove(chatId, messageId);
                } 
            })
            .catch((error) => {
                console.log(error);
            });
        

        
    };

    const openMenu = () => {
        open(id);
    };

    const time = new Date(created);

    return (
        <TouchableOpacity
            style={[style.wrapper, isMy ? style.right: style.left]}
            onPress={openMenu}
            activeOpacity={0.8}>
            <View style={[style.message, isMy? style.messageRight: style.messageLeft]}>
                <Text>{text}</Text>
                <Text>{`${time.getHours()}: ${time.getMinutes()}`}</Text>
                <Menu
                    name={id}>
                    <MenuTrigger/>
                    <MenuOptions customStyles={optionsStyles}> 
                        <MenuOption onSelect={remove}>
                            <Text style={style.menuItem}>Delete</Text>
                        </MenuOption>
                        <MenuOption>
                            <Text style={style.menuItem}>Fix</Text>
                        </MenuOption>
                        <MenuOption>
                            <Text style={style.menuItem}>Change</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View> 
        </TouchableOpacity>

    );
};

export default Message;