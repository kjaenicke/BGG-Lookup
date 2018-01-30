import React from 'react';
import { Text, View, ListView } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import HotBoardGames from '../components/HotBoardGames';

const MY_QUERY = gql`
  {
    hotBoardgames {
      id,
      name,
      thumbnail,
      yearPublished
    }
  }
`;

const HotBoardGamesContainer = graphql(MY_QUERY)(props => {
    const { loading, hotBoardgames } = props.data;

    if (loading) {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#293a4a'
            }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return (
        <HotBoardGames
            dataSource={ds.cloneWithRows(hotBoardgames)}
        />
    );
});

export default HotBoardGamesContainer;