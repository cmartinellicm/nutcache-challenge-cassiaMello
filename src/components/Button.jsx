const Button = (props) => {
  let buttonStyle = "btn btn-" + props.style;

  return (
    <button type="button" className={buttonStyle}>
      {props.style}
    </button>
  );
};

export default Button;
