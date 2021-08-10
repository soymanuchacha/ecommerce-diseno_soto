import { Fragment } from "react";

export const Input = ({label, name, onInput}) => (
    <Fragment>
    <label htmlFor={name}>{label}</label>
    <input type="text" name={name} onChange={onInput} />
    </Fragment>
)