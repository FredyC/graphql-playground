import { compose, withProps } from 'recompose'
import { inject, observer } from 'mobx-react'

const withCurrentShop = compose(
  inject('store'),
  observer,
  withProps(({ store }) => ({
    shopId: store.shopId
  }))
)

export default withCurrentShop