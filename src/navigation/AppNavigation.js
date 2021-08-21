import React from 'react';
import { Chats, Login, Chat, Contacts } from '../components/screens';
import {connect} from 'react-redux';
import {NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import chatsConfiguration from './config/Chats';
import chatConfiguration from './config/Chat';
import loginConfiguration from './config/Login';
import contactsConfiguration from './config/Conatcts';

//TODO: Якщо не буде пахати то убери папку конфіг

const Stack = createStackNavigator();
const Drawer= createDrawerNavigator();

const DrawerNavigation = () => {
    return (
            <Drawer.Navigator>
                <Drawer.Screen 
                    name='Chats'
                    component={Chats}
                    options={chatsConfiguration}/>
                <Drawer.Screen 
                    name='Contacts'
                    component={Contacts}
                    options={contactsConfiguration}/>
            </Drawer.Navigator>
    );
};

const AppNavigation = ({accessed}) => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={accessed ? 'Chats': 'Login'}>
                <Stack.Screen 
                    name='Login'
                    component={Login}
                    options={loginConfiguration}/>
                <Stack.Screen 
                    name='Main'
                    component={DrawerNavigation}
                    options={{
                        headerShown: false,
                        animationEnabled: false
                    }}/>
                <Stack.Screen 
                    name='Chat'
                    component={Chat}
                    options={chatConfiguration}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const mapStateToProps = ({settings: {accessed}}) => ({accessed});
export default connect(mapStateToProps)(AppNavigation);