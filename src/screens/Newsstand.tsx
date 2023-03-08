import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import Tabnav from "../menus/Tabnav";
import * as theme from "../details/theme";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const categories = [
  {
    id: "1",
    title: "Entertainment",
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
  },
  {
    id: "2",
    title: "Food & drinks",
    image:
      "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
  },
  {
    id: "3",
    title: "Health & fitness",
    image:
      "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=250&w=250",
  },
  {
    id: "4",
    title: "Home & garden",
    image:
      "https://images.pexels.com/photos/269255/pexels-photo-269255.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
  },
  {
    id: "5",
    title: "News & Politics",
    image:
      "https://images.pexels.com/photos/1464232/pexels-photo-1464232.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
  },
  {
    id: "6",
    title: "Science & Technology",
    image:
      "https://images.pexels.com/photos/745708/pexels-photo-745708.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
  },
  {
    id: "7",
    title: "Special interest",
    image:
      "https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
  },
  {
    id: "8",
    title: "Sports",
    image:
      "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
  },
];

const numCol = 2;
class Newsstand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribe: [
        {
          image:
            "https://images.pexels.com/photos/733854/pexels-photo-733854.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
          authorName: "Junaid Raza",
        },
        {
          image:
            "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
          authorName: "Franky",
        },
        {
          image:
            "https://images.pexels.com/photos/3250815/pexels-photo-3250815.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
          authorName: "James Doe",
        },
        {
          image:
            "https://images.pexels.com/photos/1337388/pexels-photo-1337388.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
          authorName: "A Donald",
        },
        {
          image:
            "https://images.pexels.com/photos/1467475/pexels-photo-1467475.jpeg?auto=compress&cs=tinysrgb&h=750&w=250",
          authorName: "Boris D",
        },
      ],
      howTo: [
        {
          image:
            "https://images.pexels.com/photos/242130/pexels-photo-242130.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
          authorName: "Junaid Raza",
        },
        {
          image:
            "https://images.pexels.com/photos/2147082/pexels-photo-2147082.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
          authorName: "Franky",
        },
        {
          image:
            "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
          authorName: "James Doe",
        },
        {
          image:
            "https://images.pexels.com/photos/1337388/pexels-photo-1337388.jpeg?auto=compress&cs=tinysrgb&h=250&w=250",
          authorName: "A Donald",
        },
        {
          image:
            "https://images.pexels.com/photos/1467475/pexels-photo-1467475.jpeg?auto=compress&cs=tinysrgb&h=750&w=250",
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
          <View style={styles.iconView}>
            <TouchableOpacity>
              <Icon
                style={styles.iconstyle}
                name="star"
                family="SimpleLineIcons"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontFamily: "ProductSans-Regular", marginTop: 15 }}>
          {item.authorName}
        </Text>
      </View>
    );
  };

  // How to's

  // Render subscribe list
  renderHowto = (item) => {
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
          <View style={styles.iconView}>
            <TouchableOpacity>
              <Icon
                style={styles.iconstyle}
                name="star"
                family="SimpleLineIcons"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontFamily: "ProductSans-Regular", marginTop: 15 }}>
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

  categoriesData = (categories, numCol) => {
    // Categories that is declare in json format in this file at the top
    const totalCategories = Math.floor(categories.length / numCol);
    let totalLasttotalCategorie = categories.length - totalCategories * numCol;

    while (
      totalLasttotalCategorie !== 0 &&
      totalLasttotalCategorie !== numCol
    ) {
      categories.push({ key: "blank", empty: true });
      totalLasttotalCategorie++;
    }
    return categories;
  };

  // categories design layout within flatlist
  renderCategories = ({ item, index }) => {
    if (item.empty) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ padding: 5 }}>
            <View style={styles.itemHidden} />
          </View>
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: 5,
          display: "flex",
          flexDirection: "row",
          marginBottom: 15,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.container}>
              <TouchableOpacity>
                <ImageBackground
                  imageStyle={{ borderRadius: 6 }}
                  source={{
                    uri: `${item.image}`,
                  }}
                  style={styles.image}
                >
                  <View style={{ height: 150 }}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Text style={styles.text}>{item.title}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  // Render categories ens here
  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, marginBottom: 70 }}>
            {/* news & politics starts here */}
            <View style={{ flex: 1, flexDirection: "row", marginTop: 0 }}>
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
                  News & politics
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 15,
                    marginTop: 5,
                    marginLeft: 20,
                    color: "#777",
                  }}
                >
                  What's making headlines
                </Text>

                <View>
                  {/* news & politics flatlist */}

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

                  {/* news & politics flatlist ends here  */}
                </View>
              </View>
            </View>
            {/* news & politics ends here  */}

            {/* tech reviews & how-to's starts here */}
            <View style={{ flex: 1, flexDirection: "row", marginTop: 0 }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  flex: 1,
                  height: 250,
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
                  Tech reviews & how-to's
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    fontSize: 15,
                    marginTop: 5,
                    marginLeft: 20,
                    color: "#777",
                  }}
                >
                  Get the most out of your devices
                </Text>

                <View>
                  {/* tech reviews & how-to's flatlist */}

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
                      data={this.state.howTo.slice(0, 5)}
                      renderItem={({ item }) => this.renderHowto(item)}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                  {/* FlatList Ends here */}

                  {/* tech reviews & how-to's ends here  */}
                </View>
              </View>
            </View>
            {/* tech reviews & how-to's ends here  */}

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
                  Browse by category
                </Text>
                <View
                  style={{
                    marginTop: 20,
                  }}
                >
                  {/* Flatlist Render categories */}
                  <FlatList
                    style={{ height: "100%" }}
                    data={this.categoriesData(categories, numCol)}
                    renderItem={this.renderCategories}
                    numColumns={numCol}
                  />
                  <View style={{ marginBottom: 20 }} />
                  {/* Flatlist Ends here */}
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
  container: {
    flex: 1,
  },
  iconView: {
    flex: 1,
    marginBottom: -10,
    marginTop: -20,
    zIndex: 99999,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  iconstyle: {
    color: "#777",
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    width: 22,
    height: 22,
    borderRadius: 50,
    padding: 5,
    borderRadius: 25,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  itemHidden: {
    backgroundColor: "transparent",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "ProductSans-Medium",
    textAlignVertical: "bottom",
  },
});

export default Newsstand;
