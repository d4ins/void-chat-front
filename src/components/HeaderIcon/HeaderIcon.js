import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

const HeaderIcon = props => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            color='#000'/>
    );
};

export default HeaderIcon;