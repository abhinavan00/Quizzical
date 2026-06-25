import { useId } from 'react'
import Question from '../Question/Question.jsx'
import electricIcon from '../../assets/electric-icon-hollow.svg'
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
                <div className='btn-container'>
                    <button type='submit'>
                        Check Answers
                        <img src={electricIcon} alt='electric icon'/>
                    </button>
                </div>
            </form>
        </div>
    )
}