import './Question.css'

export default function Question() {
    return (
        <div className="question-box">
            <p>
                Which of these planets in our
                solar system is known as the
                "Red Planet"?
            </p>
            <label htmlFor='question-1'>
                <span>Jupiter</span>
                <input 
                    type='radio'
                    id='question-1'
                    value={'Jupiter'}
                    name='questions-radios'
                />
            </label>
        </div>
    )
}