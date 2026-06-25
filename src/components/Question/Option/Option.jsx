import './Option.css'

export default function Option({option, name}) {
    return (
        <label htmlFor={option}>
            <span>{option}</span>
            <input 
                type='radio'
                id={option}
                value={option}
                name={name}
            />
        </label>
    )
}