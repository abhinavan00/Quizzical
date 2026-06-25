import { decode } from 'html-entities'
import './Option.css'

export default function Option({option, name}) {
    function hnadleChange(e) {
        console.log(e.target.value)
    }
    
    return (
        <label htmlFor={option.optionId}>
            <span>{option.option}</span>
            <input 
                type='radio'
                id={option.optionId}
                value={option.option}
                name={name}
                onChange={hnadleChange}
            />
        </label>
    )
}