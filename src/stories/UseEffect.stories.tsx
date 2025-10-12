import { useState, useEffect } from 'react'

export default {
  title: 'useEffect demo',
}

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)
  console.log('SimpleExample render')

  useEffect(() => {
    console.log('useEffect every render')
    document.title = counter.toString()
  })

  useEffect(() => {
    console.log('useEffect only firts render (componentDidMount)')
  }, [])

  useEffect(() => {
    console.log('useEffect first render and every counter change')
    document.title = counter.toString()
  }, [counter])

  return (
    <>
      Hello, {counter} {fake}
      <button onClick={() => setFake(fake + 1)}>fske+</button>
      <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
  )
}

export const SetTimeoutExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)
  console.log('SetTimeoutExample')

  useEffect(() => {
    setInterval(() => {
      setCounter((state) => state + 1)
    }, 1000)
  }, [])

  return (
    <>
      counter: {counter} | fake: {fake}
    </>
  )
}
