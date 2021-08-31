import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Stack';

const AppNavigation = ({accessed}) => (
    <NavigationContainer>     
        <StackNavigator accessed={accessed}/>
    </NavigationContainer>
);

const mapStateToProps = ({settings: {accessed}}) => ({accessed});
export default connect(mapStateToProps)(AppNavigation);