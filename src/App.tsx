import './App.css'
import {Accordion} from './components/Accordion';
import {Rating} from './components/Rating/Rating';

type PageTitleProps ={
  title: string,
}

function App() {
  console.log('App rendered');
  return (
    <div className="App">
      <PageTitle title={'This is App component'}/>
      <Rating value={3}/>
      <Accordion title={'Menu'}/>
      <Accordion title={'Users'}/>
      <Rating value={5}/>
    </div>
  )
}

function PageTitle({title}: PageTitleProps) {
  console.log('Title rendered')
  return <h1>{title}</h1>
}

export default App