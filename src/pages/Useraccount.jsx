import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { motion } from 'framer-motion'

const Dashboard = ({ userId }) => {
  const [userData, setUserData] = useState(null)
  const db = getFirestore()

  useEffect(() => {
    const fetchUserData = async () => {
      const userRef = doc(db, 'users', userId)
      const userSnapshot = await getDoc(userRef)
      setUserData(userSnapshot.data())
    }

    fetchUserData()
  }, [userId, db])

  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Your Points: {userData.points}
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Badges</h3>
          <div className="flex flex-wrap gap-4">
            {userData.badges.map((badge, index) => (
              <motion.div
                key={index}
                className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Top Habit Trackers</h3>
          {/* Add logic to display top habit trackers */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
