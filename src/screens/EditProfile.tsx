import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import * as theme from "../details/theme";

const { width, height } = Dimensions.get("window");

const cover = {
  uri:
    "https://images.pexels.com/photos/3695801/pexels-photo-3695801.jpeg?auto=compress&cs=tinysrgb&h=750&w=750",
};

class EditProfile extends Component {
  state = {
    text: "",
  };

  onChange = (value) => {
    this.setState({ text: value });
  };
  static navigationOptions = ({ navigation }) => {
    return {
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
            <Icon
              name="edit"
              color={theme.colors.white}
              size={theme.sizes.font * 1.5}
            />
          </TouchableOpacity>
        </View>
      ),
      headerTransparent: true,
    };
  };

  render() {
    return (
      <View style={styles.flex}>
        <ScrollView>
          <View style={[styles.flex]}>
            <Image
              source={cover}
              resizeMode="cover"
              style={{ width, height: width }}
            />
          </View>
          <View style={[styles.flex, styles.content]}>
            <View style={[styles.flex, styles.contentHeader]}>
              <Image style={[styles.avatar, styles.shadow]} source={cover} />
              <Text style={{ fontFamily: "ProductSans-Regular", fontSize: 20 }}>
                Junaid Raza
              </Text>

              {/* Followers */}
              <View
                style={{
                  marginTop: 16,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 16,
                  }}
                >
                  <Icon
                    name="facebook-f"
                    style={{ color: theme.colors.THEME, fontSize: 20 }}
                  />
                  <Text
                    style={{ fontFamily: "ProductSans-Regular", marginTop: 5 }}
                  >
                    765 Followers
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 16,
                  }}
                >
                  <Icon
                    name="twitter"
                    style={{ color: "rgba(29, 161, 242, 1)", fontSize: 20 }}
                  />
                  <Text
                    style={{ fontFamily: "ProductSans-Regular", marginTop: 5 }}
                  >
                    865 Followers
                  </Text>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 16,
                  }}
                >
                  <Icon
                    name="instagram"
                    style={{
                      color: "#333",
                      fontSize: 20,
                    }}
                  />
                  <Text
                    style={{ fontFamily: "ProductSans-Regular", marginTop: 5 }}
                  >
                    865 Followers
                  </Text>
                </View>
              </View>
              {/* Followers ends here */}
              {/* Other Details */}
              <View
                style={{
                  marginTop: 25,
                  borderTopColor: "rgba(58,55,55,0.1)",
                  borderTopWidth: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                    color: "#777",
                  }}
                >
                  Username
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                  }}
                >
                  JunaidRaza
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  borderTopColor: "rgba(58,55,55,0.1)",
                  borderTopWidth: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                    color: "#777",
                  }}
                >
                  Email
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                  }}
                >
                  You@Yourdomain.com
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  borderTopColor: "rgba(58,55,55,0.1)",
                  borderTopWidth: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                    color: "#777",
                  }}
                >
                  Username
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                  }}
                >
                  JunaidRaza
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  marginBottom: 10,
                  borderTopColor: "rgba(58,55,55,0.1)",
                  borderTopWidth: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                    color: "#777",
                  }}
                >
                  Facebook
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                  }}
                >
                  <Icon
                    name="facebook-f"
                    style={{ color: theme.colors.THEME, fontSize: 20 }}
                  />{" "}
                  JunaidCEO
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  borderTopColor: "rgba(58,55,55,0.1)",
                  borderTopWidth: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                    color: "#777",
                  }}
                >
                  Twitter
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                  }}
                >
                  <Icon
                    name="twitter"
                    style={{ color: "rgba(29, 161, 242, 1)", fontSize: 20 }}
                  />{" "}
                  UnregisteredDos
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  borderTopColor: "rgba(58,55,55,0.1)",
                  borderTopWidth: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                    color: "#777",
                  }}
                >
                  Instagram
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 17,
                    marginTop: 10,
                  }}
                >
                  <Icon
                    name="instagram"
                    style={{ color: "#777", fontSize: 20 }}
                  />{" "}
                  JunaidCEO
                </Text>
              </View>
              {/* Other Details end here */}
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
    justifyContent: "center",
    alignItems: "center",
  },
  textareaContainer: {
    height: "auto",
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "rgba(58,55,55,0.1)",
    borderWidth: 1,
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 170,
    fontSize: 14,
    color: "#777",
  },
  publishbtn: {
    marginTop: 10,
    borderColor: theme.colors.THEME,
    borderWidth: 2,
    backgroundColor: "#fff",
  },
  btntext: {
    color: "#777",
    fontFamily: "ProductSans-Regular",
  },
  ImageStyle: {
    padding: 10,
    marginTop: -18,
    marginLeft: -27,
    position: "absolute",
    borderRadius: 100,
    height: 36,
    width: 36,
    zIndex: 5,
    resizeMode: "stretch",
    alignItems: "center",
  },
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  header: {
    // backgroundColor: 'transparent',
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  content: {
    // backgroundColor: theme.colors.active,
    // borderTopLeftRadius: theme.sizes.border,
    // borderTopRightRadius: theme.sizes.border,
  },
  contentHeader: {
    backgroundColor: "transparent",
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    marginTop: -theme.sizes.padding / 2,
  },
  avatar: {
    position: "absolute",
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
    fontFamily: "ProductSans-Medium",
  },
  description: {
    fontSize: theme.sizes.font * 1.2,
    lineHeight: theme.sizes.font * 2,
    color: theme.colors.caption,
    fontFamily: "ProductSans-Regular",
  },
});

export default EditProfile;
