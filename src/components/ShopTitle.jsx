import React from 'react'
import { compose } from 'recompose'
import { buildQuery } from '../withApollo'

const ShopTitle = ({ data: { currentShop }}) => (
  <h2>
    {currentShop.name}
  </h2>
)

const decorate = buildQuery(`
  query ShopTitle {
    currentShop {
      id
      name
    }
  }
`)

export default decorate(ShopTitle)
