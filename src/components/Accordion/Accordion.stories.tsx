import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import {useState} from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
};

const onChangeHandler = action('onChange')
const onClickCallbackHandler = action('some item was clicked');

export const CollapsedAccordion = () => {
  return <Accordion title={'Collapsed Accordion'}
                    collapsed={true}
                    onChange={onChangeHandler}
                    items={[]}
                    onClick={onClickCallbackHandler}/>
}

export const OpenedAccordion = () => {
  return <Accordion title={'Opened Accordion'}
                    collapsed={false}
                    onChange={onChangeHandler}
                    items={[{title: 'DDD', value: 1}, {title: 'FFF', value: 2}, {title: 'SSS', value: 3}]}
                    onClick={onClickCallbackHandler}/>
}

export const ChangeAccordion = () => {
  const [collapsed, setCollapsed] = useState(false)
  return <Accordion title={'Accordion'}
                    collapsed={collapsed}
                    onChange={() => {
                      setCollapsed(!collapsed)
                    }}
                    items={[{title: 'DDD', value: 1}, {title: 'FFF', value: 2}, {title: 'SSS', value: 3}]}
                    onClick={onClickCallbackHandler}/>

}