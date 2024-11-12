import React, { useState, useEffect } from "react"

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(intervalId) // Cleanup on unmount
  }, [])

  return (
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock
