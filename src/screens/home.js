import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, AsyncStorage, StyleSheet, View } from 'react-native'
import { Divider, Footer, Header, Input, List } from '../components'

@connect(
  state => ({
    items: state.home.items,
  }),
  dispatch => ({
    addItem: label => dispatch({ type: 'home/addItem', payload: label }),
    toggleItem: id => dispatch({ type: 'home/toggleItem', payload: id }),
    removeItem: id => dispatch({ type: 'home/removeItem', payload: id }),
    removeCompletedItems: () => dispatch({ type: 'home/removeCompletedItems' }),
    clearItems: () => dispatch({ type: 'home/clearItems' }),
  }),
)
export class HomeScreen extends Component {
  handleInputSubmit = text => {
    if (text.startsWith(':')) {
      switch (text.slice(1)) {
        case '?': {
          Alert.alert('About', '<https://github.com/airt/todo-list-rn>')
          break
        }
        case 'c': {
          AsyncStorage.clear()
          this.props.clearItems()
          break
        }
        case 'r': {
          this.forceUpdate()
          break
        }
        default: {
          this.props.addItem(text.slice(1))
          break
        }
      }
    } else {
      this.props.addItem(text)
    }
  }

  render = () => (
    <View style={styles.container}>
      <Header />
      <Divider />
      <Input onSubmit={this.handleInputSubmit} placeholder="New Item" />
      <Divider />
      <List
        items={this.props.items}
        removeItem={this.props.removeItem}
        toggleItem={this.props.toggleItem}
      />
      <Divider />
      <Footer removeCompletedItems={this.props.removeCompletedItems} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
