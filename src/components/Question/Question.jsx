import Option from './Option/Option.jsx'
import './Question.css'

export default function Question() {
    return (
        <div className="question-box">
            <p>
                Which of these planets in our
                solar system is known as the
                "Red Planet"?
            </p>
            <div className='options-container'>
                <Option />
                <Option />
                <Option />
                <Option />
            </div>
        </div>
    )
}