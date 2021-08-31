import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Contacts } from '../screens';
import TabsNavigator from './Tabs';
import HeaderIcon from '../components/HeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const Drawer= createDrawerNavigator();

const DrawerNavigator = () => {
    return (
            <Drawer.Navigator>
                <Drawer.Screen 
                    name='MainDrawer'
                    component={TabsNavigator}
                    options={(navigation) => ({
                        title: 'Void Chat',
                        headerTitleStyle: {
                            fontFamily: 'roboto-bold'
                        },
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                                <Item 
                                    iconName='search'
                                    title='Search'
                                    iconSize={24}
                                    onPress={() => console.log('search')}/>
                            </HeaderButtons>
                        ) 
                    })}/>
                <Drawer.Screen 
                    name='Contacts'
                    component={Contacts}
                    options={({navigation}) => ({
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                                <Item 
                                    iconName='search'
                                    title='Search'
                                    iconSize={24}
                                    onPress={() => console.log('search')}/>
                            </HeaderButtons>
                        ) 
                    })}/>
            </Drawer.Navigator>
    );
};

export default DrawerNavigator;