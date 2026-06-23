import { useId } from 'react'
import Question from '../Question/Question.jsx'
import './QuizPage.css'

export default function QuizPage({data}) {

    const questionEl = data.map(dataItem => {
       return (
            <Question key={useId()} dataItem={dataItem} />
        )
    })

    return (
        <div>
            <header>
                <h1>Quizzical</h1>
            </header>
            <form>
                {questionEl}
            </form>
        </div>
    )
}