import Rating from './Rating.jsx';
import myContext from '../myContext.js';

import { useContext } from 'react';

function RatingContainer() {
  const myCtx = useContext(myContext);

  const handleSelected = (rate) => {
    myCtx.setSelected(rate);
    myCtx.setHasRated(true);
  }
  return (
    <div className='rating-container'>
      <Rating
        rate='1'
        onClick={(rate) => handleSelected(rate)}
        className={myCtx.selected === '1' ? 'selected' : ''}
      />
      <Rating
        rate='2'
        onClick={(rate) => handleSelected(rate)}
        className={myCtx.selected === '2' ? 'selected' : ''}
      />
      <Rating
        rate='3'
        onClick={(rate) => handleSelected(rate)}
        className={myCtx.selected === '3' ? 'selected' : ''}
      />
      <Rating
        rate='4'
        onClick={(rate) => handleSelected(rate)}
        className={myCtx.selected === '4' ? 'selected' : ''}
      />
      <Rating
        rate='5'
        onClick={(rate) => handleSelected(rate)}
        className={myCtx.selected === '5' ? 'selected' : ''}
      />
    </div>
  );
}

export default RatingContainer;
