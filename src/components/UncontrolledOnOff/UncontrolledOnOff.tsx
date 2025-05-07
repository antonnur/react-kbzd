import {useState} from 'react';

type PropsType = {
  onChange: (on: boolean) => void;
  defaultOnOff?: boolean;
}

export function UncontrolledOnOff({onChange, defaultOnOff}: PropsType) {

  let [on, setOn] = useState(defaultOnOff ? defaultOnOff : false) //hook with init value

  const onStyle = {
    marginLeft: '3px',
    display: 'inline-block',
    width: '65px',
    height: '50px',
    border: '1px solid black',
    backgroundColor: on ? 'green' : 'white',
  }
  const offStyle = {
    marginLeft: '3px',
    display: 'inline-block',
    width: '65px',
    height: '50px',
    border: '1px solid black',
    backgroundColor: on ? 'white' : 'red',

  }
  const indicatorStyle = {
    margin: '0 0 -23px 5px',
    display: 'inline-block',
    width: '30px',
    height: '30px',
    border: '1px solid black',
    borderRadius: '50%',
    backgroundColor: on ? 'green' : 'red',
  }

  const onClickHandler = () => {
    setOn(true)
    onChange(true)
  }

  const offClickHandler = () => {
    setOn(false)
    onChange(false)
  }

  return <div>
    <div style={onStyle}
         onClick={onClickHandler}>On
    </div>
    <div style={offStyle}
         onClick={offClickHandler}>Off
    </div>
    <div style={indicatorStyle}></div>
  </div>
}