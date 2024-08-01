const Button = ({ buttonType, onClick, children }) => {
  return (
    <button type="button" className={"btn btn-" + buttonType} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
