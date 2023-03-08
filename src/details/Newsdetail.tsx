import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Animated,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';

import * as theme from './theme';

import Getheadlinestime from '../headlines/Getheadlinestime';

import Profile from '../screens/Profile';

const { width, height } = Dimensions.get('window');

class Newsdetail extends Component {
  state = {
    text: '',
  };

  onChange = (value) => {
    this.setState({ text: value });
  };

  static navigationOptions = ({ navigation }) => ({
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name="chevron-left"
            color={theme.colors.white}
            size={theme.sizes.font * 1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="more-horiz"
            color={theme.colors.white}
            size={theme.sizes.font * 1.5}
          />
        </TouchableOpacity>
      </View>
    ),
    headerTransparent: true,
  });

  render() {
    const { navigation } = this.props;
    const Newsdetail = navigation.getParam('Newsdetail');

    return (
      <View style={styles.flex}>
        <ScrollView>
          <View style={[styles.flex]}>
            <Image
              source={{ uri: `${Newsdetail.urlToImage}` }}
              resizeMode="cover"
              style={{ width, height: width }}
            />
          </View>
          <View style={[styles.flex, styles.content]}>
            <View style={[styles.flex, styles.contentHeader]}>
              <Image
                style={[styles.avatar, styles.shadow]}
                source={{ uri: `${Newsdetail.urlToImage}` }}
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{ color: '#4285f4', fontFamily: 'ProductSans-Medium' }}
                >
                  {Newsdetail.source.name.toUpperCase()}
                </Text>
              </View>
              <Text style={styles.title}>{Newsdetail.title}</Text>

              <View
                style={[
                  styles.row,
                  {
                    alignItems: 'center',
                    marginVertical: theme.sizes.margin / 2,
                  },
                ]}
              >
                <Text style={{ marginRight: 8 }}>
                  <Icon name="clock-o" size={20} color="#777" />
                </Text>
                <Text>
                  <Getheadlinestime
                    time={Newsdetail.publishedAt}
                    style={{ fontFamily: 'ProductSans-Regular' }}
                  />
                </Text>
              </View>
              <Text style={styles.description}>{Newsdetail.content}</Text>
              {/* can take onChangeText and DefaultValue prop */}
              {/* All comments */}
              <View
                style={{
                  flex: 1,
                  marginTop: 40,
                  borderColor: 'rgba(58,55,55,0.1)',
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Image
                  // We are showing the Image from online
                  source={{
                    uri: 'https://i.pravatar.cc/300',
                  }}
                  style={styles.ImageStyle}
                />
                <View
                  style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}
                >
                  {/* onPress to Profile page */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Profile', {
                      Profile,
                    })
                    }
                  >
                    <Text style={{ fontFamily: 'ProductSans-Medium' }}>
                      Junaid Raza
                    </Text>
                  </TouchableOpacity>
                  {/* onPress to Profile page ends here  */}
                  <Text
                    style={{
                      fontFamily: 'ProductSans-Regular',
                      marginLeft: 8,
                      color: '#777',
                    }}
                  >
                    {' '}
                    3 hours ago
                  </Text>
                </View>
                <Text
                  style={{ color: '#777', fontFamily: 'ProductSans-Regular' }}
                >
                  February 29, also known as leap day or leap year day, is a
                  date added to most years that are divisible by
                  {' '}
                </Text>
                <View style={{ marginTop: 8, flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: '#777',
                        fontFamily: 'ProductSans-Regular',
                      }}
                    >
                      <Icon color={theme.colors.THEME} name="thumbs-o-up" />
                      {' '}
                      30
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: '#777',
                        fontFamily: 'ProductSans-Regular',
                        marginLeft: 10,
                      }}
                    >
                      <MaterialIcons
                        color={theme.colors.THEME}
                        name="comment"
                      />
                      {' '}
                      1
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* Reply comments layout */}
                <View
                  style={{
                    flex: 1,
                    marginTop: 40,
                    backgroundColor: 'rgba(58,55,55,0.1)',
                    padding: 10,
                    borderRadius: 10,
                    width: '90%',
                    marginLeft: 30,
                  }}
                >
                  <Image
                    // We are showing the Image from online
                    source={{
                      uri: 'https://i.pravatar.cc/300',
                    }}
                    style={styles.ImageStyle}
                  />
                  <View
                    style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}
                  >
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate('Profile', {
                        Profile,
                      })
                      }
                    >
                      <Text style={{ fontFamily: 'ProductSans-Medium' }}>
                        Junaid Raza
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Regular',
                        marginLeft: 8,
                        color: '#777',
                      }}
                    >
                      {' '}
                      1 hours ago
                    </Text>
                  </View>
                  <Text
                    style={{ color: '#777', fontFamily: 'ProductSans-Regular' }}
                  >
                    Yes, that's right
                  </Text>
                  <View style={{ marginTop: 8, flexDirection: 'row' }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          color: '#777',
                          fontFamily: 'ProductSans-Regular',
                        }}
                      >
                        <Icon color={theme.colors.THEME} name="thumbs-o-up" />
                        {' '}
                        4
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Reply comment layout ends here */}
              </View>

              {/* All comments end here */}

              {/* Comment textarea starts here */}

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                }}
              >
                <Image
                  // We are showing the Image from online
                  source={{
                    uri: 'https://i.pravatar.cc/300',
                  }}
                  style={styles.ImageStyleInput}
                />
                <View style={styles.formWrapper}>
                  <TextInput
                    style={styles.inputFiels}
                    placeholder="Type comment..."
                    placeholderTextColor="#777"
                    underlineColorAndroid="transparent"
                    multiline
                    numberOfLines={6}
                  />
                  <TouchableOpacity style={styles.button}>
                    <Icon name="caret-right" size={30} color="#777" />
                  </TouchableOpacity>
                </View>
              </View>
              {/* Comment textarea ends here */}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    marginTop: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 27,
  },
  inputFiels: {
    width: width - 70,
    height: 45,
    fontSize: 16,
    paddingLeft: 45,
    paddingRight: 40,
    backgroundColor: 'transparent',
    borderColor: 'rgba(58,55,55,0.1)',
    borderWidth: 1,
    color: '#777',
    marginHorizontal: 0,
    fontFamily: 'ProductSans-Regular',
  },
  button: {
    position: 'absolute',
    top: 8,
    right: 20,
  },
  textareaContainer: {
    height: 'auto',
    padding: 5,
    backgroundColor: '#fff',
    borderColor: 'rgba(58,55,55,0.1)',
    borderWidth: 1,
  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: 170,
    fontSize: 14,
    color: '#777',
  },
  publishbtn: {
    marginTop: 10,
    borderColor: theme.colors.THEME,
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  btntext: {
    color: '#777',
    fontFamily: 'ProductSans-Regular',
  },
  ImageStyle: {
    padding: 10,
    marginTop: -18,
    marginLeft: -17,
    position: 'absolute',
    borderRadius: 100,
    height: 36,
    width: 36,
    zIndex: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  ImageStyleInput: {
    padding: 10,
    marginTop: 15,
    marginLeft: 5,
    position: 'absolute',
    borderRadius: 100,
    height: 36,
    width: 36,
    zIndex: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column',
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
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    // backgroundColor: theme.colors.active,
    // borderTopLeftRadius: theme.sizes.border,
    // borderTopRightRadius: theme.sizes.border,
  },
  contentHeader: {
    backgroundColor: 'transparent',
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    marginTop: -theme.sizes.padding / 2,
  },
  avatar: {
    position: 'absolute',
    top: -theme.sizes.margin,
    right: theme.sizes.margin,
    width: theme.sizes.padding * 2,
    height: theme.sizes.padding * 2,
    borderRadius: theme.sizes.padding,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontFamily: 'ProductSans-Medium',
  },
  description: {
    fontSize: theme.sizes.font * 1.2,
    lineHeight: theme.sizes.font * 2,
    color: theme.colors.caption,
    fontFamily: 'ProductSans-Regular',
  },
});

export default Newsdetail;
