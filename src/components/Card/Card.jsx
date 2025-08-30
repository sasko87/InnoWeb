import classes from "./Card.module.css";

const Card = ({image, title}) => {
    return (
        <div className={classes.card}>
            <div>
                <img src={image} alt="Card Image" className={classes.cardImage} />
            </div>
            <div>
                <h2 className={classes.cardTitle}>{title}</h2>
            </div>
        </div>
    );
};

export default Card;
