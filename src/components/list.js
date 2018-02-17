import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Item } from './item'

export const List = ({ items, removeItem, toggleItem }) => (
  <FlatList
    data={items}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <Item item={item} removeItem={removeItem} toggleItem={toggleItem} />
    )}
  />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
