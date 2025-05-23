import {Rating, RatingValueType} from './Rating.tsx';
import {useState} from 'react';

const meta = {
  title: 'Rating stories',
  component: Rating,
};
export default meta;

export const EmptyRating = () => <Rating value={0} onClick={x=>x}/>
export const Rating1 = () => <Rating value={1} onClick={x=>x}/>
export const Rating2 = () => <Rating value={2} onClick={x=>x}/>
export const Rating3 = () => <Rating value={3} onClick={x=>x}/>
export const Rating4 = () => <Rating value={4} onClick={x=>x}/>
export const Rating5 = () => <Rating value={5} onClick={x=>x}/>
export const ChangeRating = () => {
  const [rating, setRating] = useState<RatingValueType>(3)
  return <Rating value={rating} onClick={setRating}/>
}