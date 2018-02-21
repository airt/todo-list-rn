import uuid from 'uuid/v4'
import { AsyncStorage } from 'react-native'

const ITEMS_STORAGE_KEY = 'items'

const newItem = label => ({ id: uuid(), label, completed: false })

export const home = {
  namespace: 'home',
  state: {
    items: [newItem('Press to complete'), newItem('Press × to remove')],
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'load' })
      dispatch({ type: 'autosave' })
    },
  },
  effects: {
    *load(action, { put }) {
      const value = yield AsyncStorage.getItem(ITEMS_STORAGE_KEY)
      if (value) {
        yield put({ type: 'replaceItems', payload: JSON.parse(value) })
      }
    },
    *autosave(action, { select, takeEvery }) {
      yield takeEvery('*', function*() {
        const items = yield select(state => state.home.items)
        AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
      })
    },
  },
  reducers: {
    addItem: (state, { payload: label }) => ({
      ...state,
      items: [newItem(label), ...state.items],
    }),
    toggleItem: (state, { payload: id }) => ({
      ...state,
      items: state.items.map(
        item =>
          item.id !== id ? item : { ...item, completed: !item.completed },
      ),
    }),
    removeItem: (state, { payload: id }) => ({
      ...state,
      items: state.items.filter(item => item.id !== id),
    }),
    removeCompletedItems: state => ({
      ...state,
      items: state.items.filter(item => !item.completed),
    }),
    clearItems: state => ({
      ...state,
      items: [],
    }),
    replaceItems: (state, { payload: items }) => ({
      ...state,
      items,
    }),
  },
}
