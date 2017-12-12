import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'

function createApolloClient(
  authMiddleware: Object,
  endpoint = 'https://vmm8wkpjl3.lp.gql.zone/graphql'
) {

  const networkInterface = createNetworkInterface({
    uri: endpoint
  })

  const dataIdFromObject = o => {
    if (o.__typename != null && o.id != null) {
      return `${o.__typename}-${o.id}`
    }
    return null
  }

  return new ApolloClient({ networkInterface, dataIdFromObject })
}

export default createApolloClient
