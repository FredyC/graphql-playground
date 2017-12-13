import React from "react";
import { compose } from "recompose";
import { buildQuery } from "../withApollo";
import withCurrentShop from "../withCurrentShop";

const ShopContact = ({ data: { shop } }) => (
  <div>
    <b>Address</b>
    <div>{shop.street}</div>
    <div>{shop.city}</div>
  </div>
);

const decorate = compose(
  withCurrentShop,
  buildQuery(`query ShopContact($shopId: ID!) {
    shop(id: $shopId) {
      id
      street
      city
    }
  }
`)
);

export default decorate(ShopContact);
