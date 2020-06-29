import React, { Component } from "react";
import ProductItem from "../../components/ProductItems";
import Axios from "axios";
import { connect } from "react-redux";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh Sach San Pham</h1>
        <div className="container">
          <div className="row">
            {this.props.productList.map((item, index) => (
              <div className="col-3" key={index}>
                <ProductItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/shoes.json",
    })
      .then((res) => {
        this.props.dispatch({
          type: "FETCH_PRODUCT",
          payload: res.data.shoes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("hello");
  }
}
const mapStateToProps = (state) => ({
  productList: state.product.products,
});
export default connect(mapStateToProps, null)(HomeScreen);
