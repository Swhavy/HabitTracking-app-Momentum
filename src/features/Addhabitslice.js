import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    closed: false,
    id: 0,
  },
]
//how can i effectively delete a particular array from teh state

const addHabitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const { name, date, description, priority, id } = action.payload
      state.push({ name, date, description, priority, id })
      // state[0].date.push({ id, date })
      // state[0].description.push({ id, description })
      // state[0].priority.push({ id, priority })
    },
    togglemodule: (state) => {
      state[0].closed = !state[0].closed
    },
    deleteHabit: (state, action) => {
      const id = action.payload
      state = state.filter((habit) => habit.id !== id)
      return state
      // state[0].date = state[0].date.filter((date) => date.id !== id)
      // state[0].description = state[0].description.filter(
      //   (description) => description.id !== id
      // )
      // state[0].priority = state[0].priority.filter(
      //   (priority) => priority.id !== id
      // )
    },
  },
})

export const { addHabit, togglemodule, deleteHabit } = addHabitSlice.actions

export default addHabitSlice.reducer
