import React from 'react';
import ExtendInput from '../ExtendInput';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useForm} from 'react-hook-form';
import {post} from '../../service/RequestController';
import style from './style';



const SendBlock = ({messageLength, userId, chatId, add, updateId}) => {
    const {control, handleSubmit, reset} = useForm({
        defaultValues: {
            text: ''
        }
    });

    const send = ({text}) => {
        reset();

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

        post(JSON.stringify(message), '/message/add')
            .then(({sended, id}) => {
                if (sended) {
                    message.id = id;
                    add(chatId, message);
                    //TODO: Поміняти логіку роботи шоб повідомлення сразу пушилось
                    
                    //updateId(chatId, message.id, id);
                }

                console.log(id);
            })
            .catch(() => {
                //TODO: Доробити свап ерора
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