import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import * as theme from "../details/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import Dropdown from "../menus/Dropdown";
import { withNavigation } from "react-navigation";

// Galio components
import { Card, Block } from "galio-framework";

const cards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300",
    title: "Stockmarket live updates, Futures off",
    desc:
      "US stocks kicked off modestly lower on Friday, as investors digested a worse-than-expected March jobs report",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503631285924-e1544dce8b28?&w=1200&h=1600&fit=crop&crop=entropy&q=300",
    title:
      "It's an exhausting story, Jonathan Karl on his up-close view of Trump",
    desc:
      "At white house briefing late last month. Jonathan Karl asked what he regarded as the fundamental question that day",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
    title:
      "During the interview CNN host Erin Burnett cries with widow of victims",
    desc:
      "Later after another Facetime session and indication from doctors that they were 'Concerned,' she received terrible news",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1490049350474-498de43bc885?&w=1600&h=900&fit=crop&crop=entropy&q=300",
    title:
      "Oil companies will be getting federal help Trump assures to offset pandemic effects",
    desc:
      "They said he assured oil firms that the federal government will make in its Strategic Patroleum Reserves so that American producers can store oil",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?&w=1500&h=900&fit=crop&crop=entropy&q=300",
    title:
      "Strategic national stockpile description altered online after Kushner's remarks",
    desc:
      "The notion of the fedral stockpile was it's supposed to be our stockpile. it's not supposed to be states' stockpile that they then use. ",
  },
];

const numCol = 2;
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  articleData = (cards, numCol) => {
    const totalArticles = Math.floor(cards.length / numCol);
    let totalLastArticle = cards.length - totalArticles * numCol;

    while (totalLastArticle !== 0 && totalLastArticle !== numCol) {
      cards.push({ key: "blank", empty: true });
      totalLastArticle++;
    }
    return cards;
  };

  // Article design layout within flatlist
  renderArticles = ({ item, index }) => {
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
      <Block flex space="between">
        <View style={{ flex: 1, marginTop: 20 }}>
          <View style={{ flex: 1, height: 210 }}>
            <View style={{ padding: 5 }}>
              <View
                style={{
                  height: 220,
                  display: "flex",
                  padding: 5,
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  shadowColor: "#777",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 1,

                  elevation: 1,
                }}
              >
                <Image
                  source={{ uri: `${item.image}` }}
                  style={{
                    width: "100%",
                    height: 100,
                    resizeMode: "cover",
                  }}
                />
                <Text
                  style={{
                    fontFamily: "ProductSans-Medium",
                    marginTop: 10,
                    color: "#333",
                  }}
                >
                  {item.title.substring(0, 37)}..
                </Text>
                <Text
                  style={{
                    fontFamily: "ProductSans-Regular",
                    marginTop: 10,
                    color: "#777",
                  }}
                >
                  {item.desc.substring(0, 47)}..
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Block>
    );
  };

  // Article design layout within flatlist ends here

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
              color="#777"
              size={theme.sizes.font * 1}
            />
          </TouchableOpacity>
        </View>
      ),
      headerTransparent: true,
    };
  };

  render() {
    return (
      <View style={{ backgroundColor: "#F2FAFD", height: "100%" }}>
        <View
          style={{
            backgroundColor: "#fff",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View
            style={{
              marginTop: 120,
              marginBottom: 25,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri:
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
                }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: "rgba(58,55,55,0.1)",
                  marginBottom: 10,
                }}
              />
            </View>
            <Text
              style={{
                color: "#222",
                textAlign: "center",
                fontFamily: "ProductSans-Bold",
                fontSize: 28,
              }}
            >
              Junaid Raza
            </Text>
            <Text
              style={{
                color: "#777",
                fontFamily: "ProductSans-Regular",
                marginTop: 5,
                textAlign: "center",
              }}
            >
              P.O Kariala, Gujrat 50700, Pakistan
            </Text>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: 25,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#777", fontFamily: "ProductSans-Regular" }}
                >
                  Articles
                </Text>
                <Text
                  style={{
                    color: "#222",
                    fontSize: 20,
                    fontFamily: "ProductSans-Medium",
                  }}
                >
                  432
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontFamily: "ProductSans-Regular", color: "#777" }}
                >
                  Followers
                </Text>
                <Text
                  style={{ fontFamily: "ProductSans-Medium", fontSize: 20 }}
                >
                  5475
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontFamily: "ProductSans-Regular", color: "#777" }}
                >
                  Follows
                </Text>
                <Text
                  style={{ fontFamily: "ProductSans-Medium", fontSize: 20 }}
                >
                  346
                </Text>
              </View>
              {/* Dropdown Menu */}
              <Dropdown />
              {/* Dropdown Menu Ends here */}
            </View>
          </View>
        </View>
        {/* Flatlist Render articles */}
        <FlatList
          style={{ height: "100%" }}
          data={this.articleData(cards, numCol)}
          renderItem={this.renderArticles}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numCol}
        />
        <View style={{ marginBottom: 20 }} />
        {/* Flatlist Ends here */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  item: {
    backgroundColor: "#3232ff",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    flex: 1,
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
  itemHidden: {
    backgroundColor: "transparent",
  },
});

export default withNavigation(Profile);
