import React, { Component } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import { withNavigation } from "react-navigation";
import Getheadlinestime from "../headlines/Getheadlinestime";

import * as theme from "../details/theme";

const { width, height } = Dimensions.get("window");

class Getworldheadlines extends Component {
  // Initial state
  constructor(props) {
    super(props);
    this.state = { isLoading: true, modalVisible: false };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  // Getting data through API
  componentDidMount() {
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=dc556b2f972846a6828887a615befecb"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.articles,
          },
          function() {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // Getting data through API ends here

  renderHeadlines = (item) => {
    const { navigation } = this.props;
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: 5,
          marginBottom: 30,
        }}
      >
        {/* Scrollview Vertical */}
        <View
          style={{
            flex: 1,
            marginTop: 10,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate("Newsdetail", { Newsdetail: item })
                  }
                >
                  <View
                    style={{
                      padding: 10,
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: "rgba(58,55,55,0.1)",
                      backgroundColor: "#fff",
                      marginBottom: 15,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          flex: 2,
                          paddingRight: 5,
                          fontFamily: "ProductSans-Medium",
                        }}
                      >
                        <Text
                          style={{ fontFamily: "ProductSans-Regular" }}
                          numberOfLines={3}
                        >
                          {item.title}
                        </Text>
                        <View style={{ marginTop: 5 }}>
                          {/* <Time elapsed /> */}
                          <Getheadlinestime
                            time={item.publishedAt}
                            style={{ fontFamily: "ProductSans-Regular" }}
                          />
                        </View>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Image
                          source={{
                            uri:
                              item.urlToImage != null
                                ? `${item.urlToImage}`
                                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==",
                          }}
                          style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover",
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.title}
            />
          </View>
        </View>
        {/* Scrollview Vertical ends here */}
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        {this.renderHeadlines()}
      </ScrollView>
    );
  }
}

export default withNavigation(Getworldheadlines);
