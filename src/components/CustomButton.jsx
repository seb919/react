export function CustomButton(props){
    const {text, classes} = props;
    return (
        <button className={classes} >{text}</button>
    );
}