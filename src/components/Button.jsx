const Button = ({ variant, children, ...rest }) => {
  // Write the code of your component here
  return (
    <button className={`btn btn--${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
