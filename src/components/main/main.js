/**
 * 首页导航
 * yj create by 2018-09-13
 */

import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
  View,
  Text
} from 'react-native';
import TabBar from './../../widget/TabBar';
import MainContent from './mainContent';
// import Discovery from './../discovery/discover';
// import Choice from './../choice/choice';
// import Me from './../me/me';
import { mainStyle } from './../../style/mainStyle';

var tabIcons = ['ios-home', 'ios-compass', 'ios-heart', 'ios-contact'];
var tabName = ['首页', '发现', '精选', '我']

export default class Main extends Component {
  render() {
    return (
      <View style={mainStyle.container}>
        <ScrollableTabView
          locked={true}
          scrollWithoutAnimation={true}
          tabBarPosition="bottom"
          renderTabBar={() => <TabBar tabIcons={tabIcons} tabNames={tabNames} />}>
          <MainContent tabLabel="首页" navigator={this.props.navigator}/>
        </ScrollableTabView>
      </View>
    )
  }
  // <Discovery tabLabel="发现" navigator={this.props.navigator}/>
  //         <Choice tabLabel="精选" navigator={this.props.navigator}/>
  //         <Me tabLabel="我" navigator={this.props.navigator}/>
}