import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login, Chat} from '../screens';
import DrawerNavigator from './Drawer';

const Stack = createStackNavigator();

const StackNavigator = ({accessed}) => {
    return (
        <Stack.Navigator initialRouteName={accessed ? 'Chats': 'Login'}>
            <Stack.Screen 
                name='Login'
                component={Login}
                options={{
                    animationEnabled: false,
                    title: 'Login',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { 
                        fontFamily: 'roboto-bold',
                        fontSize: 18
                    }
                }}/>
            <Stack.Screen 
                name='MainStack'
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }}/>
            <Stack.Screen 
                name='Chat'
                component={Chat}/>
        </Stack.Navigator>
    );
};

export default StackNavigator;