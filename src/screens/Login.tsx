import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

// galio component
import { Text } from 'galio-framework';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Fonts from 'react-native-vector-icons/FontAwesome';
import MeterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from 'react-navigation';
import * as theme from '../details/theme';

const { width: WIDTH } = Dimensions.get('window');

const image = {
  uri:
    'https://vieshare-stg.vi-vu.vn/loginBackground.jpg',
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      eyePress: false,
    };
  }

  showPass = () => {
    if (this.state.eyePress == false) {
      this.setState({ showPass: false, eyePress: true });
    } else {
      this.setState({ showPass: true, eyePress: false });
    }
  };

  static navigationOptions = ({ navigation }) => ({
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Fonts
            name="chevron-left"
            color="#777"
            size={theme.sizes.font * 1}
          />
        </TouchableOpacity>
      </View>
    ),
    headerTransparent: true,
  });

  render() {
    return (
      <ImageBackground source={image} style={styles.backgroundContainer}>
        <View style={styles.logoWraper}>
          {/* <Image source={logo} style={styles.logo} /> */}
          <Text style={styles.logoTexts}>VieShare</Text>
        </View>
        {/* Form */}
        <View style={styles.formWrapper}>
          <Icon
            name="user"
            size={28}
            color="rgba(255, 255,255,0.7)"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.inputFiels}
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.formWrapper}>
          <Icon
            name="lock"
            size={28}
            color="rgba(255, 255,255,0.7)"
            style={styles.inputIcon}
          />
          <TextInput
            secureTextEntry={this.state.showPass}
            style={styles.inputFiels}
            placeholder="Mật khẩu"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.showPass.bind(this)}
          >
            <MeterialIcon
              name={
                this.state.eyePress == false ? 'eye-outline' : 'eye-off-outline'
              }
              size={26}
              color="rgba(255,255,255,0.7)"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.btnText}>Đăng nhập</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    // backgroundColor: 'transparent',
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  formWrapper: {
    marginTop: 10,
  },
  logoWraper: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoTexts: {
    fontSize: 60,
    fontWeight: '600',
    fontFamily: 'ProductSans-Regular',
    color: '#2e7d32',
    textShadowColor: '#fff',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
  },
  logo: {
    width: 70,
    height: 70,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  inputFiels: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
    fontFamily: 'ProductSans-Regular',
  },
  button: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: theme.colors.THEME,
    justifyContent: 'center',
    fontFamily: 'ProductSans-Regular',
    marginTop: 20,
  },
  btnText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default withNavigation(Login);
