import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
