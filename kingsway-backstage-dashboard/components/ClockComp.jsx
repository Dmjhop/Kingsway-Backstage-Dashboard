import React, { useState, useEffect } from "react"

function Clock(props) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(intervalId) // Cleanup on unmount
  }, [])

  return (
    <div>
      <h2
        className="text-center text-3xl  lg:font-extrabold lg:text-5xl"
        style={{ color: `#${props.textColor}` }}>
        {time.toLocaleTimeString()}
      </h2>
    </div>
  )
}

export default Clock
