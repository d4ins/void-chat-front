import React from 'react';
import { Pressable, FlatList } from 'react-native';
import style from './style';
import gStyle from '../../../style';
import Chat from '../../Chat/Chat';
import {connect} from 'react-redux';
import {loadingToggle} from '../../../actions/settings';
import {chatAddInfo} from '../../../actions/chats';
import { withMenuContext } from 'react-native-popup-menu';


const Chats = ({navigation ,chats, loadingToggle, chatAddInfo, ctx: {menuActions: {openMenu}}}) => {


    return (
        <Pressable 
            style={[gStyle.screen, style.screen]}>
            <FlatList 
                data={chats}
                renderItem={({item}) => (
                        <Chat 
                            loadingToggle={loadingToggle}
                            chatAddInfo={chatAddInfo}
                            navigation={navigation}
                            id={item.id}
                            open={openMenu}
                            avatar={item.avatar}
                            chatName={item.chatName}
                            users={item.users}
                            key={item.id}/>
                )}/>
        </Pressable>
    );
};

const mapStateToProps = ({chats}) => {
    return {chats};
};

const mapDispatchToProps = {
    loadingToggle,
    chatAddInfo
};

export default withMenuContext(connect(mapStateToProps, mapDispatchToProps)(Chats));
