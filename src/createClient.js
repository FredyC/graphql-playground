import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'
import cuid from 'cuid'

function createApolloClient(
  authMiddleware: Object,
  endpoint = 'https://vmm8wkpjl3.lp.gql.zone/graphql'
) {

  const networkInterface = createNetworkInterface({
    uri: endpoint,
    opts: {
      headers: {
        'x-identity': getIdentity()
      }
    }
  })

  const dataIdFromObject = o => {
    if (o.__typename != null && o.id != null) {
      return `${o.__typename}-${o.id}`
    }
    return null
  }

  return new ApolloClient({ networkInterface, dataIdFromObject })
}

function getIdentity() {
  let identity = localStorage.getItem('identity')
  if (!identity) {
    identity = cuid()
    localStorage.setItem('identity', identity)
  }
  return identity
}

export default createApolloClient
