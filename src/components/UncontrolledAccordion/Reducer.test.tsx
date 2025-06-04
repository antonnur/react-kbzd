import {test} from 'vitest';
import {expect} from '@storybook/test';
import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer.tsx';

test('collapsed should be true', () => {
  //data
  const state: StateType = {
    collapsed: false,
  }
  //action
  const NewState = reducer(state, {type: TOGGLE_COLLAPSED})

  //expect
  expect(NewState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
  //data
  const state: StateType = {
    collapsed: true,
  }
  //action
  const NewState = reducer(state, {type: TOGGLE_COLLAPSED})

  //expect
  expect(NewState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
  //data
  const state: StateType = {
    collapsed: true,
  }
  //action
  expect(() => {
    reducer(state, {type: 'FAKE'})
  }).toThrowError()
})