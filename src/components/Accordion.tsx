type AccordionProps = {
  title: string;
}

export function Accordion({title}: AccordionProps) {
  console.log('Accordion rendered')
  return (
    <div>
      <AccordionTitle title={title}/>
      <AccordionBody/>
    </div>
  )
}

function AccordionTitle({title}: AccordionProps) {
  console.log('AccordionTitle rendered')
  return <h3>{title}</h3>
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
