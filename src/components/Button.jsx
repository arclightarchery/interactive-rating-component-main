import myContext from '../myContext';
import { useContext } from 'react';

function Button({ className, text }) {
  const myCtx = useContext(myContext);

  const handleSubmit = () => {
    if (myCtx.hasRated === true) {
      myCtx.setHasSubmitted(true);
    }
  };
  return (
    <button onClick={handleSubmit} className={className}>
      {text}
    </button>
  );
}

export default Button;
