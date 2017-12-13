import React from "react";
import { Table } from "reactstrap";
import { compose } from "recompose";
import { buildQuery } from "../withApollo";
import withCurrentShop from "../withCurrentShop";

const renderProduct = ({ id, name, price }) => (
  <tr key={id}>
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{price}</td>
  </tr>
);

const ShopProducts = ({ data: { shop } }) => (
  <div>
    <b>Our products</b>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{shop.products.map(renderProduct)}</tbody>
    </Table>
  </div>
);

const decorate = compose(
  withCurrentShop,
  buildQuery(`query ShopContact($shopId: ID!) {
    shop(id: $shopId) {
      id
      products {
        id
        name
        price
      }
    }
  }
`)
);

export default decorate(ShopProducts);
