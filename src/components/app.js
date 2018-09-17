import React, { Component } from 'react';
import { Navigator } from 'react-native';
import splash from './spalsh/splash';

let _navigator = null;//作为键盘返回键导航 

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'splash', component: splash }}
        renderScene={
          (route, navigator) => {
            _navigator = navigator
            let Component = route.component
            return <Component {...route.params} navigator={navigator}/>
          }
        }
        configureScene={(route) => Navigator.SceneConfigs.PushFromRight}
      />
    )
  }
}