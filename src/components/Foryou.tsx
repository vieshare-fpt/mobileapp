import React from "react";
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Foryoutime from "./ForYouTime";
import { withNavigation } from "react-navigation";

class Foryou extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=dc556b2f972846a6828887a615befecb"
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

  render() {
    const { navigation } = this.props;
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, backgroundColor: "white", paddingTop: 5 }}>
        {/* FlatList */}
        <View style={{ height: 200, marginTop: 20, marginRight: 20 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.state.dataSource.slice(0, 5)}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Newsdetail", { Newsdetail: item })
                }
              >
                <View
                  style={{
                    height: 200,
                    width: 200,
                    borderWidth: 0.5,
                    marginLeft: 20,
                    borderColor: "#dddddd",
                    borderRadius: 5,
                  }}
                >
                  <View style={{ flex: 2 }}>
                    <Image
                      source={{
                        uri:
                          item.urlToImage != null
                            ? `${item.urlToImage}`
                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==",
                      }}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5,
                      }}
                    />
                  </View>
                  <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text
                      style={{ fontFamily: "ProductSans-Medium" }}
                      numberOfLines={1}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "ProductSans-Regular",
                        paddingTop: 5,
                        color: "#777",
                      }}
                      numberOfLines={2}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.title}
          />
        </View>
        {/* FlatList Ends here */}
        {/* Scrollview Vertical */}
        <View
          style={{
            flex: 1,
            marginTop: 30,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: 90,
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
                      borderTopColor: "transparent",
                      backgroundColor: "#fff",
                      shadowColor: "rgba(58,55,55,0.1)",
                      shadowOpacity: 1,
                      shadowRadius: 15,
                      elevation: 3,
                      borderTopWidth: 1,
                      borderTopColor: "rgba(58,55,55,0.1)",
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
                          style={{ fontFamily: "ProductSans-Medium" }}
                          numberOfLines={3}
                        >
                          {item.title}
                        </Text>
                        <View style={{ marginTop: 10 }}>
                          <Foryoutime
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
  }
}

export default withNavigation(Foryou);
