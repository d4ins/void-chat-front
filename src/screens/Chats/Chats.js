import React from 'react';
import { View, FlatList } from 'react-native';
import style from './style';
import gStyle from '../../style';
import Chat from '../../components/Chat/Chat';
import {connect} from 'react-redux';
import { withMenuContext } from 'react-native-popup-menu';


const Chats = ({navigation, chats,}) => {
    const fixed = chats.filter(({fixed}) => fixed);
    const noFixed = chats.filter(({fixed}) => !fixed);

    return (
        <View 
            style={[gStyle.screen, style.screen]}>
            <FlatList
                data={fixed}
                renderItem={({item}) => (
                        <Chat 
                            fixed={true}
                            messages={item.messages}
                            navigation={navigation}
                            id={item.id}
                            avatar={item.avatar}
                            chatName={item.chatName}
                            users={item.users}
                            key={item.id}/>
                )}/>
            <FlatList
                data={noFixed}
                renderItem={({item}) => (
                        <Chat 
                            fixed={false}
                            messages={item.messages}
                            navigation={navigation}
                            id={item.id}
                            avatar={item.avatar}
                            chatName={item.chatName}
                            users={item.users}
                            key={item.id}/>
                )}/>
        </View>
    );
};

const mapStateToProps = ({chats}) => {
    return {chats};
};

export default withMenuContext(connect(mapStateToProps)(Chats));
