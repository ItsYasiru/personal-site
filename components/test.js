function Test(props) {
    const { id, title, style, children } = props;
    return (
        <div id={id} title={title} style={style}>
            {children}
        </div>
    );
}
export default Test;
