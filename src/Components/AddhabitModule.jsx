import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addHabit, togglemodule } from '../features/Addhabitslice'

const AddhabitModule = () => {
  const dispatch = useDispatch()
  const info = useSelector((state) => state.Habit)
  const [{ closed }] = info
  const [habitName, setHabitName] = useState('')
  const [habitDate, setHabitDate] = useState('')
  const [habitDescription, setHabitDescription] = useState('')
  const [habitPriority, setHabitPriority] = useState('')

  const setHabit = () => {
    dispatch(
      addHabit({
        id: Date.now(),
        name: habitName,
        date: habitDate,
        description: habitDescription,
        priority: habitPriority,
      })
    )
    dispatch(togglemodule())
  }

  const handleAddHabit = () => {
    dispatch(togglemodule())
  }

  return (
    <div>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-8 w-96">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Add a New Habit</h3>
            <button onClick={handleAddHabit}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <input
              placeholder="Enter habit name"
              className="p-2 border rounded-md w-full mb-4"
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
            />
            <input
              className="p-2 border rounded-md w-full mb-4"
              type="date"
              value={habitDate}
              onChange={(e) => setHabitDate(e.target.value)}
            />
            <textarea
              placeholder="Enter habit description"
              className="p-2 border rounded-md w-full mb-4"
              rows="4"
              value={habitDescription}
              onChange={(e) => setHabitDescription(e.target.value)}
            ></textarea>
            <select
              className="p-2 border rounded-md w-full mb-4"
              value={habitPriority}
              onChange={(e) => setHabitPriority(e.target.value)}
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={setHabit}
              >
                Add Habit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddhabitModule
