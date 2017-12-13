import React from "react";
import { compose } from "recompose";
import { buildQuery } from "../withApollo";
import withCurrentShop from '../withCurrentShop'

const ShopTitle = ({ data: { shop } }) => <h2>{shop.name}</h2>;

const decorate = compose(
  withCurrentShop,
  buildQuery(`query ShopTitle($shopId: ID!) {
    shop(id: $shopId) {
      id
      name
    }
  }`
));

export default decorate(ShopTitle);
