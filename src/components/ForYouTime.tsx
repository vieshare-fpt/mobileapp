import React, { Component } from "react";
import { Text } from "react-native";
import moment from "moment";

export default class Foryoutime extends Component {
  constructor(props) {
    super(props);
    this.date = props.time;
  }

  render() {
    const time = moment(this.date || moment.now()).fromNow();
    return (
      <Text style={{ fontFamily: "ProductSans-Regular", color: "#777" }}>
        {time}
      </Text>
    );
  }
}
