import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import { Entypo } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const dropdownLinks = [
  {
    id: 1,
    dropdownTitle: "Login",
    dropdownLink: "Login",
  },
  {
    id: 1,
    dropdownTitle: "Register",
    dropdownLink: "Register",
  },
  {
    id: 1,
    dropdownTitle: "Edit Profile",
    dropdownLink: "EditProfile",
  },
];

class Dropdown extends React.PureComponent {
  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  cliked = () => {
    alert("tapped");
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text onPress={this.showMenu}>
              <Entypo color="#777" name="dots-three-vertical" size={20} />
            </Text>
          }
        >
          {dropdownLinks.map((dropdownLink, index) => (
            <MenuItem
              key={index}
              onPress={() =>
                navigation.navigate(`${dropdownLink.dropdownLink}`, {
                  Login: `${dropdownLink.dropdownLink}`,
                })
              }
            >
              <Text style={styles.linkStyle}>
                {" "}
                {dropdownLink.dropdownTitle}{" "}
              </Text>
            </MenuItem>
          ))}
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linkStyle: { fontFamily: "ProductSans-Medium", color: "#777" },
});

export default withNavigation(Dropdown);
