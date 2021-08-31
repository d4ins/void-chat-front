import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Message from '../../components/Message';
import {connect} from 'react-redux';
import WithController from '../../context';
import style from './style';
import SendBlock from '../../components/SendBlock';
import {messageAdd, messageUpdateId, messageRemove} from '../../actions/chats';
import { withMenuContext } from 'react-native-popup-menu';


const Chat = ({route: {params: {id}}, chats, userId, messageAdd, messageUpdateId, ctx: {menuActions: {openMenu}}, messageRemove}) => {
    const chat = chats[chats.findIndex((chat) => id === chat.id)];

    const {users, messages, chatName, admin, avatar} = chat;

    return (
        <View style={style.wrapper}>
            <FlatList 
                style={style.messages}
                data={messages}
                renderItem={({item}) => (
                    <Message 
                        messageRemove={messageRemove}
                        open={openMenu}
                        key={item.id}
                        text={item.text} 
                        created={item.created}
                        fixed={item.fixed}
                        id={item.id}
                        chatId={item.chatId} 
                        viewed={item.viewed}
                        sended={item.sended}
                        error={item.error}
                        isMy={item.userId === userId}/>
                )}/>
            <SendBlock 
                messageLength={messages.length}
                chatId={id}
                userId={userId}
                add={messageAdd}
                updateId={messageUpdateId}/>
        </View>
    );
};

const mapStateToProps = ({chats, settings: {user: {id}}}) => ({
    chats,
    userId: id
});

const mapDispatchToProps = {
    messageAdd, 
    messageUpdateId,
    messageRemove
};
export default withMenuContext(WithController()(connect(mapStateToProps, mapDispatchToProps)(Chat)));