import * as React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import ToDoListScreen from "./screens/ToDoListScreen";


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  ToDoListScreen:{screen:ToDoListScreen}
})

const AppContainer =  createAppContainer(switchNavigator);
