import { decode } from 'html-entities'
import './Option.css'

export default function Option({option, name}) {
    
    return (
        <label htmlFor={option.optionId}>
            <span>{option.option}</span>
            <input 
                type='radio'
                id={option.optionId}
                value={option.option}
                name={name}
            />
        </label>
    )
}