import Question from '../Question/Question.jsx'
import './QuizPage.css'

export default function Quiz() {
    return (
        <div>
            <header>
                <h1>Quizzical</h1>
            </header>
            <form>
                <Question />
            </form>
        </div>
    )
}