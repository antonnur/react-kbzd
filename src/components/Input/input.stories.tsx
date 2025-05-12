import {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'Input',
}

// 12 - Uncontrolled input
export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }

  return <><input onChange={onChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <><input ref={inputRef}/>
    <button onClick={save}>save</button>
    - actual value: {value}</>
}
//end * 12 - Uncontrolled input

// 13 - Controlled input, FLUX
export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  return < input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  return < input type={'checkbox'} checked={parentValue} onChange={(e) => setParentValue(e.currentTarget.checked)}/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2')

  return <select value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}>
    <option value="1">Minsk</option>
    <option value="2">Moscow</option>
    <option value="3">Boo</option>
  </select>
}
// end * 13 - Controlled input, FLUX;

// 12 - Uncontrolled input
export const ControlledInputWithFixedValue = () => <input value={'Controlled Input'}/>
