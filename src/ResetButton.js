export const ResetButton = (props) => {
  return (
    <div>
      <button className="button" onClick={props.handleClick}>
        Reset
      </button>
    </div>
  );
};
