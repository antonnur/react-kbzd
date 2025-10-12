import React, { useEffect, useState } from 'react'
import './Clock.css' // CSS для стилизации

type PropsType = {}

export const ClockArrow: React.FC<PropsType> = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000) // Обновлять каждую секунду
    return () => clearInterval(intervalId) // Очистка интервала при размонтировании компонента
  }, [])

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const hourDeg = ((hours % 12) + minutes / 60) * 30
  const minuteDeg = minutes * 6
  const secondDeg = seconds * 6

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
        <div className="hand minute-hand" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
        <div className="hand second-hand" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
      </div>
    </div>
  )
}
