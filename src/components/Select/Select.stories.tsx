import {Select} from './Select.tsx';
// import {action} from '@storybook/addon-actions';
import {useState} from 'react';

export default {
  title: 'Select',
  component: Select,
}

export const WithValueSelect = () => {
  const [value, setValue] = useState('2');
  return <>
    <Select value={value}
            items={[
              {value: '1', title: ' Minsk'},
              {value: '2', title: ' Moscow'},
              {value: '3', title: ' London'},
            ]}
            onChange={setValue}/>
  </>;
}

export const WithoutValueSelect = () => {
  const [value, setValue] = useState(null);
  return <>
    <Select value={value}
            items={[
              {value: '1', title: ' Minsk'},
              {value: '2', title: ' Moscow'},
              {value: '3', title: ' London'},
            ]}
            onChange={setValue}/>
  </>
}