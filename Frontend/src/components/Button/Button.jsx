import classes from "./Button.module.css";
const Button = ({ children, onClick, ...props }) => {
  return (
    <button className={classes.mainButton} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
