import {useState} from 'react';

type StarPropsType = {
  selected: boolean
  //edit - 08 - Callbacks (part 1)
  // value: 1 | 2 | 3 | 4 | 5 | 0
  setValue: () => void
}
type RatingPropsType = {
  // value: 1 | 2 | 3 | 4 | 5 | 0

}

export function UncontrolledRating({}: RatingPropsType) {
  console.log('Rating rendered')

  let [value, setValue] = useState(2)

  return (
    <div>
      <Star selected={value > 0} setValue={()=>{setValue(1)}}/>
      <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
      <Star selected={value > 2} setValue={()=>{setValue(3)}}/>
      <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
      <Star selected={value > 4} setValue={()=>{setValue(5)}}/>
    </div>
  )
}

function Star({selected, setValue}: StarPropsType) {
  console.log('Star rendered')
  //1 version
  // if (selected) {
  //   return <span><b>star </b></span>
  // } else {
  //   return <span>star </span>
  // }

  //2 version
  // return selected ? <span><b>star</b></span> : <span>star </span>

  //3 version
  return <span onClick={() => {
    setValue()
  }}>
    {selected ? <b>star</b> : 'star'}
  </span>
}