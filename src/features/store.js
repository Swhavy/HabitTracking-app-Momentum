import { configureStore } from '@reduxjs/toolkit'
import addHabitReducer from './Addhabitslice'

const store = configureStore({
  reducer: {
    Habit: addHabitReducer,
  },
})

export default store
