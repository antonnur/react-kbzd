import React, { useCallback, useMemo, useState } from 'react'

export default {
  title: 'useMemo',
}

export const DifficultCountingExample = () => {
  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 1
      while (fake < 10000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResultA *= i
    }
    return tempResultA
  }, [a])

  for (let i = 1; i <= b; i++) {
    resultB *= i
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </>
  )
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log('UsersSecret')
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  )
}
const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {
  console.log('HelpToReactMemo')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

  const addUser = () => {
    const newUsers = [...users, 'Sveta' + new Date().getTime()]
    setUsers(newUsers)
  }

  const newArray = useMemo(() => {
    return users.filter((u) => u.toLowerCase().indexOf('a') > -1)
  }, [users])

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Users users={newArray} />
      <button onClick={addUser}>add user</button>
    </>
  )
}

export const LikeUseCallback = () => {
  console.log('LikeUseCallback')
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

  const memoizedAddBook = useMemo(() => {
    return () => {
      console.log('memoizedAddBook')
      const newBooks = [...books, 'Angular' + new Date().getTime()]
      setBooks(newBooks)
    }
  }, [books])

  const memoizedAddBook2 = useCallback(() => {
    console.log('memoizedAddBook2')
    const newBooks = [...books, 'Angular' + new Date().getTime()]
    setBooks(newBooks)
  }, [books])

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Book addBook={memoizedAddBook} />
    </>
  )
}

const BookSecret = (props: { addBook: () => void }) => {
  console.log('BookSecret')
  return (
    <div>
      <button onClick={props.addBook}>add book</button>
    </div>
  )
}

const Book = React.memo(BookSecret)
