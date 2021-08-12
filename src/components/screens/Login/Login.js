import React from 'react';
import {View, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import ExtendInput from '../../ExtendInput';
import style from './style';
import {chatsInit} from '../../../actions/chats';
import {contactsInit} from '../../../actions/contacts';
import {userInit} from '../../../actions/settings';
import { connect } from 'react-redux';
import WithController from '../../../context';


const Login = ({controller, userInit, contactsInit, chatsInit, loading}) => {
    const {handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data) => {
        controller.login(data)
            .then(({accessed, user, contacts, chats}) => {
                if (accessed) {
                    controller.connect();
                    controller.emit('onlineAdd', {id: user.id});

                    userInit(user); 
                    contactsInit(contacts);
                    chatsInit(chats);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View style={style.screen}>
            <View style={style.inputs}>
                <ExtendInput 
                    keyboardType='email-address'
                    capitalize='none'
                    control={control}
                    isPassword={false}
                    name='email'
                    placeholder='Email'
                    rules={{
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    }}/>
                <ExtendInput 
                    keyboardType='default'
                    capitalize='none'
                    control={control}
                    isPassword={true}
                    name='password'
                    placeholder='Password'
                    rules={{
                        required: true,
                        minLength: 5
                    }}/>
            </View>

            <Pressable style={style.button} onPress={handleSubmit(onSubmit)}>
                <Text style={style.buttonTitle}>Sign In</Text>
            </Pressable>

        </View>
    );
};

const mapStateToProps = ({settings: {loading}}) => ({loading});
const mapDispatchToProps = {userInit, contactsInit, chatsInit};

export default WithController()(connect(mapStateToProps, mapDispatchToProps)(Login));