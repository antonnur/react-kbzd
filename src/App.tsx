import './App.css'
// import './components/onOff/OnOff.css'
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';

type PageTitlePropsType ={
  title: string,
}

function App() {
  console.log('App rendered');
  return (
    <div className="App">
      <PageTitle title={'This is App component'}/>
      <Rating value={3}/>
      <Accordion title={'Menu'} collapsed={true}/>
      <UncontrolledAccordion title={'Users'}/>
      <UncontrolledRating value={4}/>
      <OnOff/>
    </div>
  )
}

function PageTitle({title}: PageTitlePropsType) {
  console.log('Title rendered')
  return <h1>{title}</h1>
}

export default App