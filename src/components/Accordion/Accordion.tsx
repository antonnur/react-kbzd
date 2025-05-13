type ItemType = {
  title: string;
  value: any;
}

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange: () => void
  // 14 - Accordion with items inside props
  items: ItemType[]
  onClick: (value: any) => void
};

export function Accordion({title, collapsed, onChange, items, onClick}: AccordionPropsType) {
  console.log('Accordion rendered')
  return (
    <div>
      <AccordionTitle title={title} onChange={() => {
        onChange()
      }}/>
      {/*if collapsed == false то-&& показать AccordionBody*/}

      {/* 14 - Accordion with items inside props */}
      {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
    </div>
  )
}

type AccordionTitleProps = {
  title: string
  onChange: () => void
}

function AccordionTitle({title, onChange}: AccordionTitleProps) {
  console.log('AccordionTitle rendered')
  return <h3 onClick={() => {
    onChange()
  }}>{title}</h3>
}

type AccordionBodyPropsType = {
  // 14 - Accordion with items inside props
  items: ItemType[]
  onClick: (value: any) => void
};

function AccordionBody({items, onClick}: AccordionBodyPropsType) {
  console.log('AccordionBody rendered')
  return (
    <ul>
      {/* 14 - Accordion with items inside props */}
      {items.map((i, index) => <li
        onClick={() => {
          onClick(i.value)
        }}
        key={index}>{i.title}</li>)}

      {/*<li>1</li>*/}
      {/*<li>2</li>*/}
      {/*<li>3</li>*/}
    </ul>
  )
}