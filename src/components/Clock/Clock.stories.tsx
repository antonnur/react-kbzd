import { Clock } from './Clock'
import { ClockArrow } from './ClockArrow'

export default {
  title: 'Clock',
  component: Clock,
}

export const ClockDigital = () => {
  return <Clock />
}

export const ClockAnalog = () => {
  return <ClockArrow />
}
