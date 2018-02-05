import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class HistoryScreen extends React.Component {
    static navigationOptions = {title: 'History'};

    render() {
        const {params} = this.props.navigation.state;
        return (
        <View style={styles.container}>
            <Text>History</Text>
            
            <FlatList data={params.data}
                renderItem={({item}) =>
                <Text>{item.key}</Text>
            }/>
        </View>
        );        
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });