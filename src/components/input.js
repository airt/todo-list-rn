import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

export class Input extends Component {
  state = {
    value: '',
  }

  onChangeText = value => this.setState({ value })

  onSubmitEditing = () => {
    if (this.state.value) {
      this.props.onSubmit(this.state.value)
      this.setState({ value: '' })
    }
  }

  render = () => (
    <TextInput
      style={styles.content}
      value={this.state.value}
      placeholder={this.props.placeholder}
      onChangeText={this.onChangeText}
      onSubmitEditing={this.onSubmitEditing}
      blurOnSubmit={false}
    />
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 12,
  },
})
