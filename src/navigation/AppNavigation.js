import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../components/screens/'

const Stack = createStackNavigator({

});

const AppNavigation = ({accessed}) => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={accessed ? 'Chats': 'Login'}>
                <Stack.Screen name='Login' component={Login} options={{
                    animationEnabled: false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;