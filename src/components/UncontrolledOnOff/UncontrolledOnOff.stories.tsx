import {UncontrolledOnOff} from './UncontrolledOnOff.tsx';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
};
export default meta;

const onChangeHandler = action('onChange')

export const OnMode = () => <UncontrolledOnOff defaultOnOff={true} onChange={onChangeHandler}/>
export const OffMode = () => <UncontrolledOnOff defaultOnOff={false} onChange={onChangeHandler}/>