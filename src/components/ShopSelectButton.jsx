import React from "react";
import { Button } from "reactstrap";
import { buildMutation } from "../withApollo";

const ShopSelectButton = ({ selectShop, id, isActive, children }) => (
  <div>
    <Button
      color="primary"
      active={isActive}
      outline
      onClick={() => selectShop({ id })}
    >{children}</Button>
  </div>
);

const decorate = buildMutation('selectShop', `
  mutation SelectShop($id: ID!) {
    selectShop(id: $id) {
      id
    }
  }
`, {
  refetchQueries: ['ShopTitle', 'ShopContact', 'ShopProducts', 'ShopSelection']
})

export default decorate(ShopSelectButton);
