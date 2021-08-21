import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderIcon from '../../components/HeaderIcon';

const chatsConfiguration = ({navigation}) => ({
    title: 'Void Chat',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontFamily: 'roboto-bold',
        flex: 1,
        paddingTop: 10
    },
    headerLeft: () => {
        return (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
            <Item 
                iconSize={25}
                iconName='md-menu-sharp'
                title='Menu'
                onPress={() => navigation.toggleDrawer()}/>
            </HeaderButtons>
        );
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
});

export default chatsConfiguration;
