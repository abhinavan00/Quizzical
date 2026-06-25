import { useId } from 'react'
import Question from '../Question/Question.jsx'
import './QuizPage.css'

export default function QuizPage({data}) {

    const questionEl = data.map(dataItem => {
       return (
            <Question key={useId()} dataItem={dataItem} />
        )
    })

    function handleSubmit(formData) {
        const optionValues = data.map(dataItem => {
            return formData.get(dataItem.id)
        })
        console.log(optionValues)
    }

    return (
        <div>
            <header>
                <h1>Quizzical</h1>
            </header>
            <form action={handleSubmit}>
                {questionEl}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}