import {useState} from 'react';

type AccordionPropsType = {
  title: string
  // collapsed: boolean
}

export function UncontrolledAccordion({title,}: AccordionPropsType) {
  console.log('Accordion rendered')

  let [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      <AccordionTitle title={title}/>
      <button onClick={() => {
        setCollapsed(!collapsed)
      }
      }>toggle
      </button>
      {/*if collapsed == false то-&& показать AccordionBody*/}
      {!collapsed && <AccordionBody/>}
    </div>
  )
}

function AccordionTitle({title}: AccordionPropsType) {
  console.log('AccordionTitle rendered')
  return <h3>--- {title} ---</h3>
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
