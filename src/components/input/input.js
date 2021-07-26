export const Input = ({label, name, onInput}) => (
    <label className="" htmlFor={name}>{label}
        <input className="inputForm" type="text" name={name} onChange={onInput} />
    </label>
)