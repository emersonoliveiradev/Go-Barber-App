import React from 'react'
import './config/ReactotronConfig'

import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import { store, persistor } from './store'
import Routes from './routes'

export default function src() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <Routes />
        </PersistGate>
      </Provider>
    </>
  )
}
