import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddhabitModule from './AddhabitModule'
import { deleteHabit } from '../features/Addhabitslice'

const Habit = () => {
  const info = useSelector((state) => state.Habit)
  const [{ name, closed, priority, description, date }] = info
  const [displayModule, setDisplayModule] = useState(closed)
  const [rate, setRate] = useState(0)
  const [duration, setDuration] = useState(4)
  const [user, setUser] = useState('John Doe')

  useEffect(() => {
    setDisplayModule(!displayModule)
  }, [info])

  const handleRate = () => {
    setRate((prevRate) => {
      if (prevRate == duration) {
        return prevRate
      } else {
        return prevRate + 1
      }
    })
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Momentum</h1>
          <div className="flex items-center gap-4 w-[50%]">
            <div className="w-[80%] h-[30%] rounded-full bg-blue-500 text-white flex flex-col items-center font-bold text-lg max-[746px]:rounded-lg">
              <span>
                <span className="text-gray-700 max-[746px]:text-[.7rem]">
                  Hello
                </span>{' '}
                {user},
              </span>
              <span className="text-gray-700 mb-4 text-sm p-4 max-[746px]:text-[.6rem]">
                "Welcome back! Every small step today brings you closer to your
                goals."
              </span>
            </div>
          </div>
        </header>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Habits</h2>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-6 hover:bg-blue-600 transition-colors"
          onClick={() => setDisplayModule(!displayModule)}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add New Habit
        </button>
        <div className="text-lg text-gray-700 mb-4 flex items-center">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 text-blue-500"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="20 12 20 22 4 22 4 12"></polyline>
            <rect x="2" y="7" width="20" height="5"></rect>
            <line x1="12" y1="22" x2="12" y2="7"></line>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
          </svg>{' '}
          Rewards: <span className="ml-2 font-bold">0 Trons</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-[768px]:max-[1175px]:flex min-[768px]:max-[1175px]:justify-center bg-red-300"></div>

        <section
          className="Toastify"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions text"
          aria-label="Notifications Alt+T"
        ></section>
      </div>
      {displayModule && <AddhabitModule />}
    </div>
  )
}
export default Habit
