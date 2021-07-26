import { useState, useEffect } from 'react'
// Componentes
import { Input } from '../input/input'
import './form.css'

export const Form = ({inputs, onInput, onSubmit}) => {
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

    useEffect( () => {
        const requiredInputs = inputs.filter( ({required}) => required )
        const emptyValue = requiredInputs.some( ({value}) => value )
        if(emptyValue) {
            setIsSubmitDisabled(true)
        } else {
            setIsSubmitDisabled(false)
        }
    }, [inputs])

    return(
        <form>
            {
                inputs.map(
                    ({label, name}) => (
                        <Input label={label} name={name} onInput={onInput} />
                    )
                )
            }
            <input className={isSubmitDisabled ? "disabledButton" : "bougthButton"}
            type="submit" disabled={isSubmitDisabled} onClick={onSubmit}/>
        </form>
    )
}