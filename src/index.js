import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from 'react-apollo'
import { Provider as StoreProvider } from 'mobx-react'

import createStore from './createStore'
import createClient from './createClient'
import App from './App'

const Main = () => (
  <StoreProvider store={createStore()}>
    <ApolloProvider client={createClient()}>
      <App />
    </ApolloProvider>
  </StoreProvider>
)

render(<Main />, document.getElementById("root"));
