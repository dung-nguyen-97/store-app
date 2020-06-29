import React, { Component } from "react";
import Axios from "axios";

export default class DetailSreen extends Component {
  render() {
    return <div></div>;
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/shoes.json",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
