import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FiltroState = {
  termo?: string
  criteria: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criteria: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    setTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    setCriteria: (state, action: PayloadAction<FiltroState>) => {
      state.criteria = action.payload.criteria
      state.valor = action.payload.valor
    }
  }
})

export const { setTermo, setCriteria } = filtroSlice.actions

export default filtroSlice.reducer
