import React from 'react'
import { deleteHabit } from '../features/Addhabitslice'
import { useDispatch } from 'react-redux'

const HabitCard = ({ id, name, priority, description, date }) => {
  const dispatch = useDispatch()
  return (
    <div
      key={id}
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{name || ''}</h3>
        <span className="text-sm font-medium bg-yellow-500 text-white px-3 py-1 rounded-full">
          {priority || ''}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description || ''}</p>
      <div className="flex items-center mb-4">
        <p className="text-gray-500 text-xs font-medium">Deadline: </p>
        <span className="ml-2 text-gray-800">{date || ''}</span>
      </div>
      <div className="mb-4">
        <p className="text-gray-500 text-xs font-medium">Progress:</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: '20%' }}
          ></div>
        </div>
        <p className="mt-2 text-gray-500 text-sm">20% Completed</p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Mark Progress
        </button>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center"
          onClick={() => dispatch(deleteHabit(id))}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          Delete
        </button>
      </div>
    </div>
  )
}
export default HabitCard
