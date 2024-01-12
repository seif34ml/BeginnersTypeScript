import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from 'react'

interface User {
  id: number
  username: string
}

type fibFunc = (n: Partial<User[]>) => number

const fib: fibFunc = (n) => {
  return n.length > 0 ? n.length - 1 : 1
}

const myNum: number = 9

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<Partial<User[]> | undefined>([])

  const inputRef = useRef<HTMLInputElement>(null)
  inputRef.current?.addEventListener('submit', () => {
    console.log(inputRef.current?.value),
      setUsers((prev) =>
        prev
          ? [...prev, { username: inputRef.current?.value }]
          : [{ username: inputRef.current?.value }],
      )
  })
  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')
  }, [users])

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
    ): void => {
      setCount((prev) => prev + 2)
      setUsers((prev) =>
        prev ? [...prev, { username: 'kk' }] : [{ username: 'kk' }],
      )
    },
    [],
  )

  const result = useMemo<number>(() => fib(users ? users : []), [myNum])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{users?.length}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
