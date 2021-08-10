import { Link } from "react-router-dom";
// Componentes
import { Input } from "../input/input";

export const Form = ({inputs, onInput, onSubmit, disabled}) => (
        <form>
            {
                inputs.map(
                    ({label, name, value}) => (<Input label={label} name={name} onInput={onInput} key={name} />)
                )
            }
            <Link to='/cart' className="secondaryButton">Cancelar compra</Link>
            <input className={ disabled ? "disabledButton" : "primaryButton submitButton" } value="Finalizar compra"
            type="submit" disabled={disabled} onClick={onSubmit} />
        </form>
    )