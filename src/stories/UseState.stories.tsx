import { useState } from 'react'

export default {
  title: 'useState demo',
}

function generateData() {
  console.log('generateData')
  return 1
}

export const Example1 = () => {
  const [counter1, setCounter1] = useState(0)

  return (
    <>
      <button onClick={() => setCounter1(counter1 + 1)}>+</button>
      {counter1}
    </>
  )
}

export const Example2 = () => {
  const [counter2, setCounter2] = useState(generateData)

  return (
    <>
      <button onClick={() => setCounter2((state) => state + 1)}>+</button>
      {counter2}
    </>
  )
}
