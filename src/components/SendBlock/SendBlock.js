import React from 'react';
import ExtendInput from '../ExtendInput';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useForm} from 'react-hook-form';
import {_apiBase} from '../../constants';
import style from './style';



const SendBlock = ({messageLength, userId, chatId, add, updateId}) => {
    const {control, handleSubmit, reset} = useForm({
        defaultValues: {
            text: ''
        }
    });

    const sendToServer = async (data) => {
        const res = await fetch(`${_apiBase}/message/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw console.log(new Error(`Something goes wrong, error status: ${res.status}`));
        }

        return res.json();
    };

    const send = ({text}) => {
        const message = {
            text,
            userId,
            chatId,
            created: new Date().toString(),
            fiexd: false,
            id: (messageLength + 1).toString(),
            viewed: false,
            sended: false,
            error: false
        };

        add(chatId, message);

        sendToServer(message)
            .then(({sended, id}) => {
                if (sended) {
                    updateId(chatId, message.id, id);
                }
            })
            .catch(() => {
                //TODO: Доробити свап ерора
            })
            .finally(() => {
                reset();
            });

    };

    return (
        <View>
            <ExtendInput 
            capitalize='sentences'
            control={control}
            isPassword={false}
            keyboardType='default'
            name='text'
            placeholder='Write message'
            style={style.input}
            rules={{
                required: true,
                maxLength: 300
            }}/>
            <Ionicons 
                name='ios-send-outline'
                size={24}
                style={style.button}
                onPress={handleSubmit(send)}/>
        </View>
    );
};

export default SendBlock;