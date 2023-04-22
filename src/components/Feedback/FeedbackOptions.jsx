export const FeedbackOptions = ({ options, onStateUpdate }) => {
  return (
    <>
      {options.map((option, idx) => (
        <button key={idx} onClick={() => onStateUpdate(option)}>
          {option}
        </button>
      ))}
    </>
  );
};
