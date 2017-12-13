import React from "react";
import { Button } from "reactstrap";
import { inject, observer } from "mobx-react";
import { compose, withHandlers } from "recompose";

const ShopSelectButton = ({ onSelectShop, id, store, children }) => (
  <div>
    <Button color="primary" active={store.shopId === id} outline onClick={onSelectShop}>
      {children}
    </Button>
  </div>
);

const decorate = compose(
  inject("store"),
  withHandlers({
    onSelectShop: ({ id, store }) => () => store.selectShop(id)
  }),
  observer
);

export default decorate(ShopSelectButton);
