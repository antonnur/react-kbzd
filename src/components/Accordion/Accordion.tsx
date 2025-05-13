type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange: () => void
}

export function Accordion({title, collapsed, onChange}: AccordionPropsType) {
  console.log('Accordion rendered')
  return (
    <div>
      <AccordionTitle title={title} collapsed={collapsed} onChange={() => {
        onChange()
      }}/>
      {/*if collapsed == false то-&& показать AccordionBody*/}
      {!collapsed && <AccordionBody/>}
    </div>
  )
}

function AccordionTitle({title, onChange}: AccordionPropsType) {
  console.log('AccordionTitle rendered')
  return <h3 onClick={() => {
    onChange()
  }}>{title}</h3>
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