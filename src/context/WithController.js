import React from 'react';
import {ChatContext} from './Context';

const WithController = () => (Wrapped) => { 
    return (props) => {  
        return (
            <ChatContext.Consumer>
                {
                    (controller) => {
                        return <Wrapped {...props} controller = {controller}/>
                    }
                }
            </ChatContext.Consumer>
        )
    }
};

export default WithController;