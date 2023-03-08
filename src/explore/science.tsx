import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  LogBox,
} from 'react-native';
import * as Font from 'expo-font';
import _ from 'lodash';
import Slidemenu from '../menus/Slidemenu';
import Getscienceheadlines from './Getscienceheadlines';
import Tabnav from '../menus/Tabnav';

LogBox.ignoreLogs(['componentWillReceiveProps', 'VirtualizedLists']);
const _console = _.clone(console);
console.warn = (message) => {
  if (
    message.indexOf('componentWillReceiveProps' || 'VirtualizedLists') <= -1
  ) {
    _console.warn(message);
  }
};

export default class Science extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
      'ProductSans-Medium': require('../../assets/fonts/ProductSans-Medium.ttf'),
      'ProductSans-Light': require('../../assets/fonts/ProductSans-Light.ttf'),
      'ProductSans-Regular': require('../../assets/fonts/ProductSans-Regular.ttf'),
    }).then(() => {
      this.setState({ fontLoaded: true });
    });
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.state.fontLoaded ? (
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View
              style={{
                backgroundColor: 'white',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  marginBottom: 15,
                }}
              >
                <Slidemenu />
              </View>
            </View>
            <ScrollView scrollEventThrottle={16}>
              <Getscienceheadlines />
            </ScrollView>
            {/* <Newsdetail /> */}
            <Tabnav />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(58,55,55,0.1)',
    padding: 10,
  },
});
