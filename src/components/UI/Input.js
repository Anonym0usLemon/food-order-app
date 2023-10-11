import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input ref={ref} {...props.input} /> {/* use the spread operator to make the input configurable */}
        </div>
    );
}); 

export default Input; 