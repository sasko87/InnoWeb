import classes from './Button.module.css';
const Button = ({ children }) => {
    return (
        <button className={classes.mainButton}>
            {children}
        </button>
    );
}

export default Button;
