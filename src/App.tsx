import './App.css'
// import './components/onOff/OnOff.css'
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff.tsx';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion.tsx';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating.tsx';
import {useState} from 'react';
import {OnOff} from './components/onOff/OnOff';

type PageTitlePropsType = {
  title: string,
}


export const App = () => {
  console.log('App rendered');

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  let [switchOn, setSwitchOn] = useState(false)

  return (
    <div className="App">
      <PageTitle title={'This is App component'}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion title={'Menu'} collapsed={accordionCollapsed} onChange={() => {
        setAccordionCollapsed(!accordionCollapsed)
      }}/>
      <OnOff on={switchOn} onChange={setSwitchOn}/>
      {/*<OnOff on={true} onChange={(on) => {alert(on)}}/>*/}
      <UncontrolledAccordion title={'Users'} onClick={() => {
      }}/>
      {/*edit - 08 - Callbacks (part 1)*/}
      <UncontrolledRating onChange={x=>x}/>
      <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
    </div>
  )
}

function PageTitle({title}: PageTitlePropsType) {
  console.log('Title rendered')
  return <h1>{title}</h1>
}