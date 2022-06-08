function Rating({ onClick, className, rate }) {
  return (
    <button
      onClick={() => onClick(rate)}
      className={`${className} rating`}>
      {rate}
    </button>
  );
}

export default Rating;
