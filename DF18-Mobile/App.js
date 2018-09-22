import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading : true };
  }

  componentDidMount() {
    return fetch("https://secure-everglades-12984.herokuapp.com/dreamforce")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading : false,
          message : responseJson.message
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
