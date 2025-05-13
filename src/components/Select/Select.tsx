type ItemType = {
  title: string;
  value: any;
}

type SelectPropsType = {
  value: any
  onClick: (value: any) => void
  items: ItemType[]
}

export function Select({ items}: SelectPropsType) {

  return (
    <div>
      <div>{}</div>
      {items.map((i) => <div>{i.title}</div>)}
    </div>
  )
}