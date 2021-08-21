import React from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const contactsConfiguration = ({navigation}) => ({
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

export default contactsConfiguration;