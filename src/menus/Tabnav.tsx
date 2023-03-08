import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import * as theme from "../details/theme";

const tablinks = [
  {
    id: 10,
    TabTitle: "For you",
    Tablink: "Foryou",
    icon: "user",
  },
  {
    id: 11,
    TabTitle: "Headlines",
    Tablink: "Headlines",
    icon: "globe-alt",
  },
  {
    id: 12,
    TabTitle: "Login",
    Tablink: "Login",
    icon: "login",
  },
  // {
  //   id: 13,
  //   TabTitle: "Newsstand",
  //   Tablink: "Newsstand",
  //   icon: "layers",
  // },
];

class Tabnav extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
      "ProductSans-Medium": require("../../assets/fonts/ProductSans-Medium.ttf"),
      "ProductSans-Light": require("../../assets/fonts/ProductSans-Light.ttf"),
      "ProductSans-Regular": require("../../assets/fonts/ProductSans-Regular.ttf"),
    }).then(() => {
      this.setState({ fontLoaded: true });
    });
  }

  render() {
    return (
      <View style={styles.containerMain}>
        {this.state.fontLoaded ? (
          <View style={styles.bottomView}>
            {tablinks.map((tablink) => (
              <View
                key={tablink.id}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate(`${tablink.Tablink}`)
                  }
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      style={styles.iconstyle}
                      name={`${tablink.icon}`}
                      family="SimpleLineIcons"
                    />
                    <Text style={styles.textStyle}>{tablink.TabTitle}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  bottomView: {
    width: "100%",
    flexDirection: "row",
    height: 70,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 3,
    borderTopColor: "rgba(58,55,55,0.1)",
    borderTopWidth: 1,
  },
  textStyle: {
    color: "#777",
    fontSize: 13,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "ProductSans-Medium",
  },
  iconstyle: {
    color: theme.colors.THEME,
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default withNavigation(Tabnav);
