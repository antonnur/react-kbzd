import {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer.tsx';

type AccordionPropsType = {
  title: string
  // collapsed: boolean
  onClick: () => void
}

export function UncontrolledAccordion({title,}: AccordionPropsType) {
  console.log('Accordion rendered')

  // let [collapsed, setCollapsed] = useState(false)
  let [state, dispatch] = useReducer(reducer, {collapsed: false})

  return (
    <div>
      <AccordionTitle title={title} onClick={() => {
        dispatch({type: TOGGLE_COLLAPSED})
      }}/>
      {!state.collapsed && <AccordionBody/>}

      {/*<button onClick={() => {setCollapsed(!collapsed)}}>toggle</button>*/}
      {/*if collapsed == false то-&& показать AccordionBody*/}
      {/*{!collapsed && <AccordionBody/>}*/}
    </div>
  )
}

function AccordionTitle({title, onClick}: AccordionPropsType) {
  console.log('AccordionTitle rendered')
  return <h3 onClick={() => {
    onClick()
  }}>--- {title} ---</h3>
}

function AccordionBody() {
  console.log('AccordionBody rendered')
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
