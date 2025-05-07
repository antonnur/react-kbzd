import {useState} from 'react';
import {OnOff} from './OnOff.tsx';
import { action } from '@storybook/addon-actions';


const meta = {
  title: 'OnOff',
  component: OnOff,
};
export default meta;

const onChangeHandler = action('onChange')

export const OnMode = () => <OnOff on={true} onChange={onChangeHandler}/>
export const OffMode = () => <OnOff on={false} onChange={onChangeHandler}/>

export const ChangeMode = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOff on={value} onChange={setValue}/>
}