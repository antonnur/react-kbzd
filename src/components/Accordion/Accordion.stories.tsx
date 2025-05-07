import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import {useState} from 'react';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;
export const TestStory: Story = {
  args: {
    title: 'input text...',
    collapsed: false,
  }
}

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
  return <Accordion title={'Collapsed Accordion'}
                    collapsed={true}
                    onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
  return <Accordion title={'Opened Accordion'}
                    collapsed={false}
                    onChange={() => {
                    }}/>
}

export const ChangeAccordion = () => {
  const [collapsed, setCollapsed] = useState(false)
  return <Accordion title={'Accordion'}
                    collapsed={collapsed}
                    onChange={() => {
                      setCollapsed(!collapsed)
                    }}/>
}