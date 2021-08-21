import React from 'react';
import Context from './Context';

const WithController = () => (Wrapped) => { 
    return (props) => {  
        return (
            <Context.Consumer>
                {
                    (controller) => {
                        return <Wrapped {...props} controller = {controller}/>;
                    }
                }
            </Context.Consumer>
        );
    };
};

export default WithController;