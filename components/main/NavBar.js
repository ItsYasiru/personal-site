import classes from "./NavBar.module.scss";

function NavBar(props) {
    const { children } = props;

    return (
        <nav className={classes.main}>
            <ul>
                {children.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
