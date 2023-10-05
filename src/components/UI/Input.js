import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input {...props.input} /> {/* use the spread operator to make the input configurable */}
        </div>
    );
}

export default Input; 