import React from 'react';
import { View, FlatList } from 'react-native';
import style from './style';
import gStyle from '../../../style';
import Contact from '../../Contact';
import {connect} from 'react-redux';


const Contacts = ({navigation, contacts}) => {

    return (
        <View style={[gStyle.screen, style.screen]}>
            <FlatList 
                data={contacts}
                renderItem={({item}) => (
                    <Contact 
                        key={item.id}
                        avatar={item.avatar}
                        desc={item.desc}
                        email={item.emai}
                        fullName={item.fullName}
                        id={item.id}
                        online={item.online}/>
                )}/>
        </View>
    );
};

const mapStateToProps = ({contacts}) => ({contacts});

export default connect(mapStateToProps)(Contacts);