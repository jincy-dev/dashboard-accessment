import { Text } from '@mantine/core';
import { IoStar, IoStarOutline } from 'react-icons/io5';

type Props = {
  username: string;
  image: string;
  rating: number;
  feedback: string;
};

const FeedbackItem = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 border-b pb-3 border-black'>
      <div className='flex gap-3 items-center'>
        <img src={props.image} alt='' className='h-10 w-10 rounded-full' />
        <Text size='lg'>{props.username}</Text>
      </div>
      <div className='flex'>
        {[...Array(props.rating)].map((_, index) => (
          <IoStar key={index} color='yellow' />
        ))}
        {[...Array(5 - props.rating)].map((_, index) => (
          <IoStarOutline key={index} color='yellow' />
        ))}
      </div>
      <Text>{props.feedback}</Text>
    </div>
  );
};

export default FeedbackItem;
