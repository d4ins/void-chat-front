import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useForm} from 'react-hook-form';
import ExtendInput from '../../ExtendInput';
import style from './style';
import gStyle from '../../../style';
import {chatsInit} from '../../../actions/chats';
import {contactsInit} from '../../../actions/contacts';
import {userInit, accessToggle, loadingToggle} from '../../../actions/settings';
import { connect } from 'react-redux';
import WithController from '../../../context';
import {_apiBase} from '../../../constants';
import { CommonActions } from '@react-navigation/native';


const Login = ({navigation, controller, userInit, contactsInit, chatsInit, loading, accessToggle, loadingToggle}) => {

    const {handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const sendRes = async (data, url) => {
        const res = await fetch(`${_apiBase}${url}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw console.log(new Error(`Something goes wrong, error status: ${res.status}`));
        }

        return res.json();
    };

    const onSubmit = (data) => {
        loadingToggle();

        sendRes(data, '/login')
            .then(({accessed, user, contacts, chats}) => {
                if (accessed) {
                    
                    controller.connect();
                    controller.emit('onlineAdd', {id: user.id});

                    userInit(user); 
                    contactsInit(contacts);
                    chatsInit(chats);

                    accessToggle();

                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: 'Main' },
                        ],
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                loadingToggle(); 
            });
    };

    return (
        <View style={[gStyle.screen, style.screen]}>
            <View style={style.inputs}>
                <ExtendInput 
                    keyboardType='email-address'
                    capitalize='none'
                    control={control}
                    isPassword={false}
                    name='email'
                    placeholder='Email'
                    style={style.input}
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
                    style={style.input}
                    rules={{
                        required: true,
                        minLength: 5
                    }}/>
            </View>
            <View style={style.label}>
                <Text style={style.text}>Already have an account?</Text>
                <Text 
                    style={style.switcher}
                    onPress={() => console.log('Swap')}>
                    Sign up.
                </Text>
            </View>


            <Pressable style={style.button} onPress={handleSubmit(onSubmit)}>
                <Text style={style.buttonTitle}>Sign In</Text>
            </Pressable>

        </View>
    );
};

const mapStateToProps = ({settings: {loading}}) => ({loading});
const mapDispatchToProps = {userInit, contactsInit, chatsInit, accessToggle, loadingToggle};

export default WithController()(connect(mapStateToProps, mapDispatchToProps)(Login));