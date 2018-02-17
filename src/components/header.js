import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = () => (
  <View style={styles.container}>
    <Text style={styles.content}>Todo List</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 16,
  },
  content: {
    textAlign: 'center',
  },
})
