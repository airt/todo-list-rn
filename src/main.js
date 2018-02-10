import Expo from 'expo'
import App from './app'

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate()
}

Expo.registerRootComponent(App)
