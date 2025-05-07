type PropsType = {
  on: boolean;
  onChange: (on: boolean) => void;
}

export function OnOff({on, onChange}: PropsType) {

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

  return <div>
    <div style={onStyle} onClick={() => {
      onChange(true)
    }}>On
    </div>
    <div style={offStyle} onClick={() => {
      onChange(false)
    }}>Off
    </div>
    <div style={indicatorStyle}></div>
  </div>
}