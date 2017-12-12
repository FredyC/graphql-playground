import React from 'react'
import { compose } from 'recompose'
import { buildQuery } from './withApollo'
import { Table } from 'reactstrap'

const renderProduct = ({ id, name, price }) => (
  <tr key={id}>
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{price}</td>
  </tr>
)

const ShopProducts = ({ data: { currentShop }}) => (
  <div>
    <b>Our products</b>
    <Table striped>
      <thead>
        <th>#</th>
        <td>Name</td>
        <td>Price</td>
      </thead>
      <tbody>{currentShop.products.map(renderProduct)}</tbody>
    </Table>
  </div>
)

const decorate = buildQuery(`
  query ShopProducts {
    currentShop {
      id
      products {
        id
        name
        price
      }
    }
  }
`)

export default decorate(ShopProducts)
