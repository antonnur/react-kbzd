import { Clock } from './ClockDigital'
import { ClockArrow } from './ClockArrow'

export default {
  title: 'Clock',
  component: Clock,
}

export const ClockDigital = () => {
  return <Clock date={new Date()} />
}

export const ClockAnalog = () => {
  return <ClockArrow date={new Date()} />
}
