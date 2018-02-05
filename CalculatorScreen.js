import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class CalculatorScreen extends React.Component {
  static navigationOptions = {title: 'Calculator'};

  constructor(props) {
    super(props);
    this.state = {firstNumber: '', secondNumber: '', result: 0, data: []};
    this.buttonAdd = this.buttonAdd.bind(this);
    this.buttonSubtract = this.buttonSubtract.bind(this);
  }

  buttonAdd = () => {
    const sum = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber);
    this.setState({data: [...this.state.data, {key: this.state.firstNumber + " + " + this.state.secondNumber + " = " + sum}], result: sum});
  }

  buttonSubtract = () => {
    const difference = parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber)
    this.setState({data: [...this.state.data, {key: this.state.firstNumber + " - " + this.state.secondNumber + " = " + difference}], result: difference});
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>

        <View style={styles.inputView}>
          <Text>Result:  {this.state.result} </Text>
          <TextInput keyboardType="numeric" style={styles.textbox}
            onChangeText={(firstNumber) => this.setState({firstNumber})}
            value={this.state.firstNumber}
          />
          <TextInput keyboardType="numeric" style={styles.textbox}
            onChangeText={(secondNumber) => this.setState({secondNumber})}
            value={this.state.secondNumber}
          />
        </View>
        
        <View style={styles.buttonView}>
          <View>
            <Button onPress={this.buttonAdd} title="+" />
          </View>
          <View>
            <Button onPress={this.buttonSubtract} title="-" />
          </View>
          <View>
            <Button onPress={() => navigate('History', {data: this.state.data})} title="History" />
          </View>
      </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  textbox: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 2,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    width: 200,
  }
});
