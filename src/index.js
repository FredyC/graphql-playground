import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from 'react-apollo'

import createClient from './createClient'
import App from './App'

const Main = () => (
  <ApolloProvider client={createClient()}>
    <App />
  </ApolloProvider>
)

render(<Main />, document.getElementById("root"));
