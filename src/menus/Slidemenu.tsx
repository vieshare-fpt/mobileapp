import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import * as theme from "../details/theme";

const navlinks = [
  {
    id: 1,
    NavTitle: "Latest",
    Navlink: "Headlines",
    icon: "home",
  },
  {
    id: 2,
    NavTitle: "World",
    Navlink: "World",
    icon: "globe",
  },
  {
    id: 3,
    NavTitle: "Technology",
    Navlink: "Technology",
    icon: "screen-desktop",
  },
  {
    id: 4,
    NavTitle: "Business",
    Navlink: "Business",
    icon: "briefcase",
  },
  {
    id: 5,
    NavTitle: "Sports",
    Navlink: "Sports",
    icon: "fire",
  },
  {
    id: 6,
    NavTitle: "Science",
    Navlink: "Science",
    icon: "chemistry",
  },
  {
    id: 7,
    NavTitle: "health",
    Navlink: "Health",
    icon: "emotsmile",
  },
];

class Slidemenu extends React.Component {
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

  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {this.state.fontLoaded ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {navlinks.map((navlink, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => navigate(`${navlink.Navlink}`)}
              >
                <Icon
                  style={{ marginRight: 5, color: theme.colors.THEME }}
                  name={`${navlink.icon}`}
                  family="SimpleLineIcons"
                />
                <Text
                  style={{
                    marginRight: 15,
                    fontFamily: "ProductSans-Medium",
                  }}
                >
                  {navlink.NavTitle}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "rgba(58,55,55,0.1)",
    padding: 10,
    flexDirection: "row",
  },
});

export default withNavigation(Slidemenu);
