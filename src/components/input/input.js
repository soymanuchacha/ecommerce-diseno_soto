export const Input = ({label, name, value, onInput}) => (
    <label htmlFor={name}>{label}
        <input type="text" name={name} onChange={onInput} defaultValue={value} />
    </label>
)