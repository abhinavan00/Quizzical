import './Option.css'

export default function Option({option}) {
    return (
        <label htmlFor={option}>
            <span>{option}</span>
            <input 
                type='radio'
                id={option}
                value={'Jupiter'}
                name='option-radios'
            />
        </label>
    )
}