import React from 'react';
import { TextInput, } from 'react-native';
import { Controller } from 'react-hook-form';

const ExtendInput = ({control, name, rules, placeholder, isPassword, capitalize, keyboardType, style}) => {

    const renderField = ({field: { onChange, onBlur, value }}) => (
        <TextInput
            keyboardType={keyboardType}
            style={style}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            autoCapitalize={capitalize}/>
    );

    return (
        <Controller
            control={control}
            render={renderField}
            name={name}
            rules={rules}/>

    );
};

export default ExtendInput;