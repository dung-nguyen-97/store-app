import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <div className="card p-2 text-center mb-4">
        <img
          width={"100%"}
          height={250}
          alt="title"
          src={this.props.item.image}
        />
        <p className="lead font-weight-bold">{this.props.item.name}</p>
        <i
          style={{ color: ` ${this.props.item.color}` }}
          className="fa fa-tag"
        ></i>
        <p></p>
        <p className="lead text-info">Price: {this.props.item.price}</p>
        <button className="btn btn-success">Buy now</button>
      </div>
    );
  }
}

export default ProductItem;
