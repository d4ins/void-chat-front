import React from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import style from './style';

const ChatCreator = ({navigation, contacts}) => {
    return (
        <View>

        </View>
    );
};

const mapStateToProps = ({contacts}) => ({contacts});

export default connect(mapStateToProps)(ChatCreator);