import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Controller, Control, ControllerRenderProps } from 'react-hook-form';

const ExtendInput = ({control, name, rules, placeholder, isPassword, capitalize, keyboardType}) => {
    const renderField = ({field: { onChange, onBlur, value }}) => (
        <TextInput
            keyboardType={keyboardType}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder={placeholder}
            secureTextEntry={isPassword}
            autoCapitalize={capitalize}/>
    )

    return (
        <Controller
            control={control}
            render={renderField}
            name={name}
            rules={rules}/>

    );
};

export default ExtendInput;