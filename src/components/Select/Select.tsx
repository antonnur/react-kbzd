import styles from './Select.module.css';
import {useEffect, useState} from 'react';

type ItemType = {
  title: string;
  value: any;
}

type SelectPropsType = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[];
}
//1R6x6_VZrWYk

export function Select(props: SelectPropsType) {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const selectedItem = props.items.find(item => item.value === props.value)
  const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

  const toggleItems = () => setActive(!active);

  const onItemClick = (value: any) => {
    props.onChange(value)
    toggleItems()
  }

  useEffect(() => {
    setHoveredElementValue(props.value)
  }, [props.value])

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const applicantElement = e.key === 'ArrowDown'
            ? props.items[i + 1]
            : props.items[i - 1]

          if (applicantElement) {
            props.onChange(applicantElement.value);
            return;
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value);
      }
    }

    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false);
    }
  }

  return (
    <>
      <div className={styles.select}>
        <span className={styles.main}
              onKeyUp={onKeyUp}
              tabIndex={0}
              onClick={toggleItems}>{selectedItem && selectedItem.title}
        </span>
        {active &&
          <div className={styles.items}>
            {props.items.map(item => <div
              onMouseEnter={() => {
                setHoveredElementValue(item.value)
              }}
              className={styles.item + ' ' + (hoveredItem === item ? styles.selected : '')}
              key={item.value}
              onClick={() => {
                onItemClick(item.value);
              }}>{item.title}
            </div>)}
          </div>
        }
      </div>
    </>
  )
}