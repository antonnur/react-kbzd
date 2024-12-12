type StarProps = {
  selected: boolean
}
type RatingProps = {
  value: number;
}

export function Rating({value}: RatingProps) {
  console.log('Rating rendered')
  if (value === 1) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>
    )
  } else if (value === 2) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>
    )
  } else if (value === 3) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>
    )
  } else if (value === 4) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
      </div>
    )
  } else if (value === 5) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
      </div>
    )
  }
  return (
    <div>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>
  )
}

function Star({selected}: StarProps) {
  console.log('Star rendered')
  if (selected) {
    return <span><b>star </b></span>
  } else {
    return <span>star </span>
  }
}