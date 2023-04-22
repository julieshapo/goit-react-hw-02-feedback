export const Statistics = ({ options, stats, total, percentage }) => {
  return (
    <>
      {options.map((option, idx) => (
        <p key={idx}>
          {option} : {stats[option]}
        </p>
      ))}
      <p>Total:{total}</p>
      <p>Percentage:{percentage}%</p>
    </>
  );
};
