import React from "react";
import {
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  View,
  SafeAreaView,
} from "react-native";
import * as Font from "expo-font";
import Tabnav from "../menus/Tabnav";
import Icon from "react-native-vector-icons/Ionicons";
import Foryou from "../components/Foryou";

export default class Index extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
      "ProductSans-Medium": require("../../assets/fonts/ProductSans-Medium.ttf"),
      "ProductSans-Light": require("../../assets/fonts/ProductSans-Light.ttf"),
      "ProductSans-Regular": require("../../assets/fonts/ProductSans-Regular.ttf"),
      "ProductSans-Bold": require("../../assets/fonts/ProductSans-Bold.ttf"),
    }).then(() => {
      this.setState({ fontLoaded: true });
    });
  }
  UNSAFE_componentWillMount() {
    this.startHeaderHeight = 15;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 30 + StatusBar.currentHeight;
    }
  }

  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.state.fontLoaded ? (
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: this.startHeaderHeight,
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 20,
                  marginTop: Platform.OS == "android" ? 10 : null,
                  padding: 10,
                  backgroundColor: "white",
                  shadowOffset: { width: 0, height: 0 },
                  shadowColor: "black",
                  shadowOpacity: 0.2,
                  elevation: 1,
                }}
              >
                <Icon
                  name="ios-search"
                  size={20}
                  style={{
                    marginRight: 10,
                    marginTop: Platform.OS == "android" ? 4 : null,
                  }}
                />
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Search News"
                  placeholderTextColor="grey"
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    fontFamily: "ProductSans-Regular",
                  }}
                />
              </View>
            </View>
            <ScrollView scrollEventThrottle={16}>
              <Foryou />
            </ScrollView>
            <Tabnav />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}
