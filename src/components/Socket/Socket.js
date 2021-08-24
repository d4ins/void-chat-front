import React from 'react';
import withController from '../../context';
import { connect } from 'react-redux';
import {messageAdd, messageRemove} from '../../actions/chats';
import {updateOnline} from '../../actions/contacts';
import {} from '../../actions/settings';


const Socket = ({children, controller, accessed, user, updateOnline, messageAdd, messageRemove}) => {
    if (accessed) {
        controller.connect();
        controller.emit('onlineAdd', {id: user.id});

        controller.on('swapOnline', ({id, online}) => {
            updateOnline(id, online);
        });

        controller.on('messageAdd', ({message, chatId}) => {
            const newMessage = {
                text: message.text,
                created: message.created,
                fixed: message.fixed,
                id: message.id,
                viewed: message.viewed,
                sended:message.sended,
                error: message.error,
                userId: message.userId,
            };

            messageAdd(newMessage, chatId);
        });

        controller.on('messageRemove', ({messageId, chatId}) => {
            messageRemove(chatId, messageId);
        });

    }


    return (children);
};

const mapStateToProps = ({settings: {accessed, user}}) => ({accessed, user});
const mapDispatchToProps = {
    messageAdd,
    updateOnline,
    messageRemove
};

export default withController()(connect(mapStateToProps, mapDispatchToProps)(Socket));