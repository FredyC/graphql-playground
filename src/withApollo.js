import React from 'react'
import { compose, withHandlers, branch, createSink, renderNothing, renderComponent } from 'recompose'
import { gql, graphql } from 'react-apollo'

const ErrorSink = createSink(({ data }) => {
  throw new Error(data.error)
})

const handleError = branch(
  ({ data }) => Boolean(data && data.error),
  renderComponent(ErrorSink)
)

const Loader = () => <i>loading...</i>

const handleLoading = branch(
  ({ data }) => Boolean(data && data.loading),
  renderComponent(Loader)
)

export function buildQuery(query, options) {
  return compose(
    graphql(gql(query), { options }),
    handleError,
    handleLoading,
  )
}

export function buildMutation(name, query, options) {
  return compose(
    graphql(gql(query), { options }),
    handleError,
    withHandlers({
      [name]: ({ mutate}) => (variables) => mutate({ variables })
    })
  )
}
