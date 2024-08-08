import FeedbackItem from './FeedbackItem';

const Feedback = () => {
  return (
    <div className='col-span-12 lg:col-span-4 h-min flex flex-col gap-4 bg-primaryBackground rounded-lg p-4'>
      <h2 className='text-xl font-bold'>Customer's Feedback</h2>
      <div className='flex flex-col gap-4'>
        <FeedbackItem
          username='James'
          image='https://i.pravatar.cc/251?u=mail@ashallendesign.co.uk'
          rating={3}
          
          feedback='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
        accusamus neque facere officiis maiores dolores distinctio, consectetur
        voluptatem libero reiciendis provident quisquam nostrum nesciunt iste
        beatae. Incidunt dolore deleniti soluta.'
        />
        <FeedbackItem
          username='John'
          image='https://avatar.iran.liara.run/public/boy?username=Ash'
          rating={4}
          feedback='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
        accusamus neque facere officiis maiores dolores distinctio, consectetur
        voluptatem libero reiciendis provident quisquam nostrum nesciunt iste
        beatae. Incidunt dolore deleniti soluta.'
        />
      </div>
    </div>
  );
};

export default Feedback;
