import React, {useState} from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import {Context} from './src/context';
import SocketController from './src/service/SocketController';

const controller = new SocketController();

const fonts = () => Font.loadAsync({
	'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
	'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
	'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
	'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
	'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
	'roboto-light': require('./assets/fonts/Roboto-Light.ttf')
});

 const App = () => {
	const [font, setFont] = useState(false);

	if(font) {
		return (
			<Provider store={store}>
				<Context.Provider value={controller}>
					<AppNavigation accessed={true}/>
				</Context.Provider>
			</Provider>
		);
	} else {
		return (
			<AppLoading 
				startAsync={fonts} 
				onError={(error)=>console.log(error)} 
				onFinish={() => setFont(true)}/>
		);
	}

};
export default App;

