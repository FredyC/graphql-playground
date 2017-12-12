import React from 'react'
import { compose } from 'recompose'
import { buildQuery } from './withApollo'

const ShopContact = ({ data: { currentShop }}) => (
  <div>
    <b>Address</b>
    <div>{currentShop.street}</div>
    <div>{currentShop.city}</div>
  </div>
)

const decorate = buildQuery(`
  query ShopContact {
    currentShop {
      id
      street
      city
    }
  }
`)

export default decorate(ShopContact)
