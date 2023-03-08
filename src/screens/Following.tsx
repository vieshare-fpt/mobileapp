import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import Tabnav from "../menus/Tabnav";
import * as theme from "../details/theme";

const DATA = [
  {
    id: "1",
    title: "US intelligence doesn't believe Kim Jon is dead",
    time: "4 hours ago",
    postedBy: "Junaid Raza",
    image:
      "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
  },
  {
    id: "2",
    time: "4 hours ago",
    postedBy: "James Doe",
    title:
      "White house officials are discussing plans to replace HHS Secretary",
    image:
      "https://images.unsplash.com/photo-1503631285924-e1544dce8b28?&w=1200&h=1600&fit=crop&crop=entropy&q=300",
  },
  {
    id: "3",
    time: "10 hours ago",
    postedBy: "Junaid Raza",
    title:
      "CNN 'Larry King' episode featuring Biden accuser's mother disappears from Google Play",
    image:
      "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
  },
  {
    id: "4",
    time: "1 Day ago",
    postedBy: "Junaid Raza",
    title:
      "Germnay flips on smartphone contact tracing, backs Apple and Google - Reuters",
    image:
      "https://images.unsplash.com/photo-1490049350474-498de43bc885?&w=1600&h=900&fit=crop&crop=entropy&q=300",
  },
  {
    id: "5",
    time: "2 days ago",
    postedBy: "Junaid Raza",
    title:
      "What's next for global oil prices? The industry may shut down - bloomingberg",
    image:
      "https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?&w=1500&h=900&fit=crop&crop=entropy&q=300",
  },
];

export default class Following extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribe: [
        {
          image:
            "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
          authorName: "Junaid Raza",
        },
        {
          image:
            "https://images.unsplash.com/photo-1503631285924-e1544dce8b28?&w=1200&h=1600&fit=crop&crop=entropy&q=300",
          authorName: "Franky",
        },
        {
          image:
            "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
          authorName: "James Doe",
        },
        {
          image:
            "https://images.unsplash.com/photo-1490049350474-498de43bc885?&w=1600&h=900&fit=crop&crop=entropy&q=300",
          authorName: "A Donald",
        },
        {
          image:
            "https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?&w=1500&h=900&fit=crop&crop=entropy&q=300",
          authorName: "Boris D",
        },
      ],
    };
  }

  static navigationOptions = {
    headerTintColor: "#333",
    headerStyle: {
      backgroundColor: "#fff",
      marginTop: -30,
    },
    headerTitleStyle: { color: "#333" },
  };

  // Render subscribe list
  renderItem = (item) => {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 5,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 100,
            borderRadius: 5,
            backgroundColor: "#fff",
            shadowColor: "rgba(58,55,55,0.1)",
            shadowOffset: {
              width: 10,
              height: 12,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Image
            source={{ uri: `${item.image}` }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: "rgba(58,55,55,0.1)",
              marginBottom: 10,
            }}
          ></Image>
        </View>
        <Text style={{ fontFamily: "ProductSans-Regular", marginTop: 10 }}>
          {item.authorName}
        </Text>
      </View>
    );
  };

  // Render subscribe list ends here

  renderStories = (item) => {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 5,
          display: "flex",
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.gray,
          marginBottom: 15,
        }}
      >
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 25, height: 25, borderRadius: 25 }}
              source={{ uri: `${item.image}` }}
            />
            <Text
              style={{
                fontFamily: "ProductSans-Regular",
                marginTop: 5,
                color: "#777",
                marginLeft: 6,
              }}
            >
              {item.postedBy}
            </Text>
          </View>
          <Text
            numberOfLines={2}
            style={{
              fontFamily: "ProductSans-Regular",
              marginTop: 10,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: "ProductSans-Regular",
              marginTop: 10,
              color: "#777",
            }}
          >
            {item.time}
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: "rgba(58,55,55,0.1)",
              marginBottom: 10,
              marginRight: 20,
              marginLeft: 10,
            }}
            source={{ uri: `${item.image}` }}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, marginBottom: 70 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  flex: 1,
                  height: 180,
                  marginTop: 0,
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Medium",
                    fontSize: 20,
                    marginTop: 20,
                    marginLeft: 20,
                  }}
                >
                  Follow
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 18,
                    marginTop: 20,
                    marginLeft: 20,
                    color: "#777",
                  }}
                >
                  Follow topic to see more stories of your interest
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "ProductSans-Medium",
                      fontSize: 17,
                      marginTop: 20,
                      marginLeft: 20,
                      color: "#4285f4",
                    }}
                  >
                    Follow topics
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Sources */}
            <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  flex: 1,
                  height: 290,
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Medium",
                    fontSize: 20,
                    marginTop: 20,
                    marginLeft: 20,
                  }}
                >
                  Sources
                </Text>
                <View>
                  {/* Subscribe source flatlist */}

                  {/* FlatList */}
                  <View
                    style={{
                      height: 150,
                      marginTop: 20,
                      marginRight: 20,
                      borderWidth: 0,
                    }}
                  >
                    <FlatList
                      style={{
                        height: 200,
                        width: "auto",
                        borderWidth: 0,
                        marginLeft: 15,
                        borderColor: "#dddddd",
                      }}
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                      data={this.state.subscribe.slice(0, 5)}
                      renderItem={({ item }) => this.renderItem(item)}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                  {/* FlatList Ends here */}

                  {/* Subscribe source flatlist ends here  */}
                </View>

                <View
                  style={{
                    borderTopColor: theme.colors.gray,
                    borderTopWidth: 1,
                  }}
                >
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: "ProductSans-Medium",
                        fontSize: 17,
                        marginTop: 20,
                        marginLeft: 20,
                        color: "#4285f4",
                        textAlign: "center",
                      }}
                    >
                      View all and manage
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Sources ends here  */}

            {/* Location part starts here */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  flex: 1,
                  height: 180,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Medium",
                    fontSize: 20,
                    marginTop: 20,
                    marginLeft: 20,
                  }}
                >
                  Local
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 18,
                    marginTop: 20,
                    marginLeft: 20,
                    color: "#777",
                  }}
                >
                  Follow locations to see more stories about them for you
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "ProductSans-Medium",
                      fontSize: 17,
                      marginTop: 20,
                      marginLeft: 20,
                      color: "#4285f4",
                    }}
                  >
                    Follow locations
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Location part ends hre */}

            {/* Saved stories starts here */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  flex: 1,
                  height: "auto",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProductSans-Medium",
                    fontSize: 20,
                    marginTop: 20,
                    marginLeft: 20,
                  }}
                >
                  Saved stories
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    marginLeft: 20,
                  }}
                >
                  {/* Saved Flatlist */}
                  <FlatList
                    data={DATA.slice(0, 4)}
                    renderItem={({ item }) => this.renderStories(item)}
                    keyExtractor={(item, index) => index.toString()}
                  />
                  {/* Saved Flatlist ends here */}
                </View>
                <View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: "ProductSans-Medium",
                        fontSize: 17,
                        marginLeft: 20,
                        marginBottom: 20,
                        color: "#4285f4",
                        textAlign: "center",
                      }}
                    >
                      View all and manage
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Saved stories ends here */}
          </View>
        </ScrollView>
        <Tabnav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    paddingBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  row: {
    flexDirection: "row",
  },
});
