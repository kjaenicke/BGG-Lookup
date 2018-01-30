import React from 'react';
import { StyleSheet, Text, View, ListView, Image } from 'react-native';

const HotBoardGames = ({ dataSource }) => (
    <View style={styles.container}>
        <ListView
            dataSource={dataSource}
            renderRow={(rowData) => (
                <View style={styles.gameRow}>
                    <View style={styles.nameContainer}>
                        <View>
                            <Text style={styles.name}>{rowData.name}</Text>
                            <Text style={styles.yearPublished}>{rowData.yearPublished}</Text>
                        </View>
                    </View>
                    <Image
                        source={{ uri: rowData.thumbnail }}
                        style={styles.image}
                    />
                </View>
            )}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#293a4a'
    },
    gameRow: {
        flex: 1,
        padding: 20,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#536a81',
        borderBottomWidth: 1
    },
    nameContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontFamily: 'HelveticaNeue-Medium',
        color: 'white',
        width: '90%',
        fontSize: 20
    },
    yearPublished: {
        color: '#1abc9c',
        fontSize: 15,
        fontFamily: 'HelveticaNeue-Medium'
    },
    image: {
        height: 100,
        width: 100
    }
});

export default HotBoardGames;