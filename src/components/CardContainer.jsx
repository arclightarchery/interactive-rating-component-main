import RatingContainer from './RatingContainer.jsx';
import Star from './Star.jsx';
import HeadingQuestion from './HeadingQuestion.jsx';
import HeadingSupport from './HeadingSupport.jsx';
import Button from './Button.jsx';
import myContext from '../myContext.js';
import { useContext } from 'react';

function CardContainer() {
  const myCtx = useContext(myContext);
  return (
    <div className={`card-container ${myCtx.hasSubmitted ? 'center' : ''}`}>
      {myCtx.hasSubmitted ? (
        <>
          <img src='images/illustration-thank-you.svg' alt='thank-you' />
          <div className='rating-result'>You selected {myCtx.selected} out of 5</div>
          <h1 className='thank-you'>Thank you!</h1>
          <div className='final-word'>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </div>
        </>
      ) : (
        <>
          <Star />
          <HeadingQuestion />
          <HeadingSupport />
          <RatingContainer />
          <Button className='submit-button' text='SUBMIT' />
        </>
      )}
    </div>
  );
}

export default CardContainer;
