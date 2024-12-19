type StarPropsType = {
  selected: boolean
}
type RatingPropsType = {
  value: 1 | 2 | 3 | 4 | 5 | 0
}

export function Rating({value}: RatingPropsType) {
  console.log('Rating rendered')

  return (
    <div>
      <Star selected={value > 0}/>
      <Star selected={value > 1}/>
      <Star selected={value > 2}/>
      <Star selected={value > 3}/>
      <Star selected={value > 4}/>
    </div>
  )
}

function Star({selected}: StarPropsType) {
  console.log('Star rendered')
  if (selected) {
    return <span><b>star </b></span>
  } else {
    return <span>star </span>
  }
}