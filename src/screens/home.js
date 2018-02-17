import uuid from 'uuid/v4'
import React, { Component } from 'react'
import { Alert, AsyncStorage, StyleSheet, View } from 'react-native'
import { Divider, Footer, Header, Input, List } from '../components'

const ITEMS_STORAGE_KEY = 'items'

const newItem = label => ({ id: uuid(), label, completed: false })

export class HomeScreen extends Component {
  state = {
    items: [newItem('Press to complete'), newItem('Press × to remove')],
  }

  componentDidMount = () =>
    AsyncStorage.getItem(ITEMS_STORAGE_KEY).then(
      value => value && this.setState({ items: JSON.parse(value) }),
    )

  componentDidUpdate = () =>
    AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(this.state.items))

  addItem = label =>
    this.setState({ items: [newItem(label), ...this.state.items] })

  toggleItem = id =>
    this.setState({
      items: this.state.items.map(
        item =>
          item.id !== id ? item : { ...item, completed: !item.completed },
      ),
    })

  removeItem = id =>
    this.setState({ items: this.state.items.filter(item => item.id !== id) })

  removeCompletedItems = () =>
    this.setState({
      items: this.state.items.filter(item => !item.completed),
    })

  clearItems = () => this.setState({ items: [] })

  handleInputSubmit = text => {
    if (text.startsWith(':')) {
      switch (text.slice(1)) {
        case '?': {
          Alert.alert('About', '<https://github.com/airt/todo-list-rn>')
          break
        }
        case 'c': {
          AsyncStorage.clear()
          this.clearItems()
          break
        }
        case 'r': {
          this.forceUpdate()
          break
        }
        default: {
          this.addItem(text.slice(1))
          break
        }
      }
    } else {
      this.addItem(text)
    }
  }

  render = () => (
    <View style={styles.container}>
      <Header />
      <Divider />
      <Input onSubmit={this.handleInputSubmit} placeholder="New Item" />
      <Divider />
      <List
        items={this.state.items}
        removeItem={this.removeItem}
        toggleItem={this.toggleItem}
      />
      <Divider />
      <Footer removeCompletedItems={this.removeCompletedItems} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
