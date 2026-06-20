import './Option.css'

export default function Option() {
    return (
        <label htmlFor='question-1'>
            <span>Jupiter</span>
            <input 
                type='radio'
                id='question-1'
                value={'Jupiter'}
                name='questions-radios'
            />
        </label>
    )
}