import { types } from 'mobx-state-tree'

const Store = types.model('Store', {
  shopId: types.maybe(types.string)
}).actions(self => ({
  selectShop(id) {
    self.shopId = id
  }
}))

export default function createStore() {
  return Store.create({ shopId: '24' })
}
