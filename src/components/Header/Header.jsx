import Button from "../Button/Button";
import classes from "./Header.module.css";

const Header = () => {
    return <>
    <header>
        <div>
            <a href="/">
                <img src="/logo1.png" alt="InnoWeb Logo" className={classes.logo} />
            </a>
        </div>

        <nav>
            <ul className={classes.navList}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><Button>Order Now</Button></li>
            </ul>
        </nav>
    </header>
    </>
}

export default Header