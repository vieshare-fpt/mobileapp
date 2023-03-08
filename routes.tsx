/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable global-require */
import * as React from 'react';
import PropTypes from 'prop-types';

import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';

// screens
import Foryou from './src/screens/Foryou';
import Following from './src/screens/Following';
import Newsstand from './src/screens/Newsstand';
import Headlines from './src/screens/Headlines';
import World from './src/explore/world';
import Newsdetail from './src/details/Newsdetail';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import EditProfile from './src/screens/EditProfile';
import Technology from './src/explore/technology';
import Business from './src/explore/business';
import Sports from './src/explore/sports';
import Science from './src/explore/science';
import Health from './src/explore/health';

import theme from './src/theme';

class GalioDrawer extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'ProductSans-Medium': require('./assets/fonts/ProductSans-Medium.ttf'),
    }).then(() => {
      this.setState({ fontLoaded: true });
    });
  }
}

const MenuIcon = ({ name, family, focused }: any) => (
  <Icon
    name={name}
    family={family}
    size={theme.SIZES.FONT}
    color={focused ? '#4285f4' : '#777'}
  />
);

MenuIcon.defaultProps = {
  name: null,
  family: null,
  focused: false,
};

MenuIcon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  focused: PropTypes.bool,
};

const screens = {
  Foryou: {
    screen: Foryou,
  },

  Headlines: {
    screen: Headlines,
  },
  Following: {
    screen: Following,
  },
  Newsstand: {
    screen: Newsstand,
  },
  World: {
    screen: World,
  },
  Newsdetail,
  Profile,
  Login,
  Register,
  EditProfile,
  Technology,
  Business,
  Sports,
  Science,
  Health,
};

const options = {
  contentComponent: props => <GalioDrawer {...props} />,
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#4285f4',
    inactiveTintColor: 'rgba(0,0,0,0.6)',
    style: {
      fontSize: 13,
      fontWeight: '200',
      shadowColor: 'rgba(58,55,55,0.1)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 15,
      elevation: 3,
      borderTopColor: 'transparent',
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: 50,
    },
    activeTabStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 4,
      borderColor: '#6C1D7C',
    },
  },
};

const GalioApp = createStackNavigator(screens, options);

export default GalioApp;
