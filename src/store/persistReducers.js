import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

export default (reducers) => {
  const persistedReduder = persistReducer(
    {
      key: 'gobarber',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers
  )

  return persistedReduder
}
