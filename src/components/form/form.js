import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Componentes
import { Input } from '../input/input'

export const Form = ({inputs,  onInput, onSubmit}) => {
    const [disabled, setDisabled] = useState(true)

    useEffect( () => {
        const requiredInputs = inputs.filter( ({required}) => required )
        const isEmpty = requiredInputs.some( ({value}) => !value )
        const emailAuth = inputs.filter( ({auth}) => auth)
        console.log("required", requiredInputs)
        console.log("auth", emailAuth)

        if(isEmpty && (emailAuth[0].value === emailAuth[1].value)) {
            setDisabled(false)
            console.log("funciona el botón")
        } else {
            setDisabled(true)
            console.log("no funciona el botón")
        }

        /*
        const requiredInputs = inputs.filter( ({required}) => required )
        const isEmpty = requiredInputs.some( ({value}) => !value )
        if(isEmpty) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
        */
        
    }, [inputs, onInput])

    return(
        <form>
            {
                inputs.map(
                    ({label, name, value}) => ( <Input label={label} name={name} onInput={onInput} value={value} key={name} /> )
                )
            }
            <Link to='/cart' className="secondaryButton">Cancelar compra</Link>
            <input className={ disabled ? "disabledButton" : "primaryButton submitButton"} value="Finalizar compra"
            type="submit" disabled={disabled} onClick={onSubmit} />
        </form>
    )
}