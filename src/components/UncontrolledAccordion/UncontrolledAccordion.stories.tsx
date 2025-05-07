import type {Meta} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion.tsx';

const meta: Meta<typeof UncontrolledAccordion> = {
  component: UncontrolledAccordion,
};
export default meta;

const onChangeHandler = action('onChange')

export const ChangeUncontrolledAccordion = () => {
  return <UncontrolledAccordion title={'Collapsed UncontrolledAccordion'} onClick={onChangeHandler}/>
}