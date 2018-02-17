import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Footer = ({ removeCompletedItems }) => (
  <TouchableOpacity style={styles.container} onPress={removeCompletedItems}>
    <Text style={styles.content}>Remove Completed Items</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  content: {
    textAlign: 'center',
  },
})
