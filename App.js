import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './src/client';
import HotBoardGames from './src/containers/HotBoardGames';

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HotBoardGames />
      </ApolloProvider>
    );
  }
}
