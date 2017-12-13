import React from "react";
import { compose, withState, withHandlers } from "recompose";
import { Modal, ModalBody, ModalHeader, ButtonGroup, Button } from "reactstrap";
import { buildQuery } from "../withApollo";

import ShopSelectButton from "./ShopSelectButton";

const ShopSelection = ({ data: { currentShop, shops }, selectShop, isOpen, toggleOpen }) => (
  <div>
    <Button color="info" size="lg" onClick={toggleOpen}>Pick different branch</Button>
    <Modal isOpen={isOpen} onClick={toggleOpen}>
      <ModalHeader>Pick different branch</ModalHeader>
      <ModalBody>
        <ButtonGroup size="sm" vertical>
          {shops.map(({ id, name, city }) => (
            <ShopSelectButton
              key={id}
              id={id}
              isActive={currentShop.id === id}
            >{`${name} (${city})`}</ShopSelectButton>
          ))}
        </ButtonGroup>
      </ModalBody>
    </Modal>
  </div>
);

const decorate = compose(
  withState('isOpen', 'setOpen', false),
  withHandlers({
    toggleOpen: ({ isOpen, setOpen }) => () => setOpen(!isOpen)
  }),
  buildQuery(`
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
  `)
)

export default decorate(ShopSelection);
