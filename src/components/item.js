import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Item = ({
  item: { id, label, completed },
  removeItem,
  toggleItem,
}) => (
  <View style={[styles.container, completed && styles.completed]}>
    <TouchableOpacity style={styles.content} onPress={() => toggleItem(id)}>
      <Text style={styles.checkbox}>{completed ? '✓' : ''}</Text>
      <Text>{label}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.remove} onPress={() => removeItem(id)}>
      <Text>&times;</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
  },
  completed: {
    backgroundColor: 'whitesmoke',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
  },
  checkbox: {
    width: 32,
    textAlign: 'center',
  },
  remove: {
    width: 32,
  },
})
