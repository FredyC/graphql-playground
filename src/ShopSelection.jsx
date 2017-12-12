import React from "react";
import { compose } from "recompose";
import { ButtonGroup } from "reactstrap";
import { buildQuery } from "./withApollo";

import ShopSelectButton from "./ShopSelectButton";

const ShopSelection = ({ data: { currentShop, shops }, selectShop }) => (
  <div>
    <div><b>Pick different branch</b></div>
    <ButtonGroup size="sm" vertical>
      {shops.map(({ id, name, city }) => (
        <ShopSelectButton
          key={id}
          id={id}
          isActive={currentShop.id === id}
        >{`${name} (${city})`}</ShopSelectButton>
      ))}
    </ButtonGroup>
  </div>
);

const decorate = buildQuery(`
  query ShopSelection {
    currentShop {
      id
    }
    shops {
      id
      name
      city
    }
  }
`);

export default decorate(ShopSelection);
