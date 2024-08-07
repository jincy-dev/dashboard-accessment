import { PropsWithChildren } from 'react';

const IconButton = (props: PropsWithChildren) => {
  return (
    <div className='bg-zinc-500 h-10 w-10 flex justify-center items-center rounded-full'>
      {props.children}
    </div>
  );
};

export default IconButton;
