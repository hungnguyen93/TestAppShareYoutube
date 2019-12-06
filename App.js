import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import RootModalStack from './src/Router/AppRoot';

const AppContainer = createAppContainer(RootModalStack);

export default class App extends Component {
  state = {  }
  render() {
    return (
      <AppContainer
      ref={nav => {
        this.navigator = nav
      }}
      />
    );
  }
};