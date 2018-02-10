import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class App extends Component {
  render = () => (
    <View style={styles.container}>
      <Text>It works</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
})

export default App
