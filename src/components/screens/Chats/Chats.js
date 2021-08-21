import React from 'react';
import { View, FlatList } from 'react-native';
import style from './style';
import gStyle from '../../../style';
import Chat from '../../Chat/Chat';
import {connect} from 'react-redux';
import {loadingToggle} from '../../../actions/settings';
import {chatAddInfo} from '../../../actions/chats';


const Chats = ({navigation ,chats, loadingToggle, chatAddInfo}) => {
    return (
        <View style={[gStyle.screen, style.screen]}>
            <FlatList 
                data={chats}
                renderItem={({item}) => {
                    //console.log(item);
                    return (
                        <Chat 
                            loadingToggle={loadingToggle}
                            chatAddInfo={chatAddInfo}
                            navigation={navigation}
                            id={item.id}
                            avatar={item.avatar}
                            chatName={item.chatName}
                            users={item.users}
                            key={item.id}/>
                    );
                }}/>
        </View>
    );
};

const mapStateToProps = ({chats}) => {
    return {chats};
};

const mapDispatchToProps = {
    loadingToggle,
    chatAddInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
