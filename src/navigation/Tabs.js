import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Chats } from '../screens';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();

const TabsNavigator = () => {

    return (
        <Tab.Navigator     
            activeColor="#000"
            inactiveColor='#7a7a7a'
            barStyle={{
                backgroundColor: '#FFF',
                height: 60
            }}>
            <Tab.Screen 
                name='Chats'
                component={Chats}
                options={({navigation}) => ({
                    tabBarIcon: ({color}) => (
                        <Feather name="message-circle" size={24} color={color} style={{
                            transform: [{rotateY: '180deg'}]
                        }} />
                    )
                })}/>
            <Tab.Screen 
                name='Mentions'
                component={Chats}
                options={({navigation, route}) => ({
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="alternate-email" size={24} color={color} />
                    )
                })}/>
        </Tab.Navigator>
    );
};

export default TabsNavigator;