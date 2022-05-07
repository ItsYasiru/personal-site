import classes from "./ContactMenu.module.scss";

function ContactMenu(props) {
    const { id, title, style, children } = props;

    return (
        <div id={id} title={title} style={style} className={classes.main}>
            {children}
        </div>
    );
}

export default ContactMenu;
