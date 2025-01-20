import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    name: [{ id: 'd', name: 'dee' }],
    date: [{ id: 'd', name: 'dee' }],
    description: [{ id: 'd', name: 'dee' }],
    priority: [{ id: 'd', name: 'dee' }],
    closed: true,
  },
]
//how can i effectively delete a particular array from teh state

const addHabitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const { name, date, description, priority, id } = action.payload
      state[0].name.push({ id, name })
      state[0].date.push({ id, date })
      state[0].description.push({ id, description })
      state[0].priority.push({ id, priority })
    },
    togglemodule: (state) => {
      state[0].closed = !state.closed
    },
    deleteHabit: (state, action) => {
      const { id } = action.payload
      state[0].name = state[0].name.filter((name) => name.id !== id)
      state[0].date = state[0].date.filter((date) => date.id !== id)
      state[0].description = state[0].description.filter(
        (description) => description.id !== id
      )
      state[0].priority = state[0].priority.filter(
        (priority) => priority.id !== id
      )
    },
  },
})

export const { addHabit, removeHabit, togglemodule, deleteHabit } =
  addHabitSlice.actions

export default addHabitSlice.reducer
