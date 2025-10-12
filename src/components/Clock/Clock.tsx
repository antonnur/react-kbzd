import React, { useEffect, useState } from 'react'

type PropsType = {}

export const Clock: React.FC<PropsType> = () => {
  const [time, setTime] = useState(new Date())
  console.log('ClockExample')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // Cleanup функция для очистки интервала
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  return (
    <div>
      <h3>Живые часы</h3>
      <div>{formatTime(time)}</div>
    </div>
  )
}
