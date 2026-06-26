import { useState} from 'react'
import Question from '../Question/Question.jsx'
import electricIcon from '../../assets/electric-icon-hollow.svg'
import clsx from 'clsx'
import './QuizPage.css'

export default function QuizPage({data}) {

    const [selectedOptions, setSelectedOptions] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const questionEl = data.map(dataItem => {
       return (
            <Question 
                key={dataItem.id} 
                dataItem={dataItem} 
                selectedOptions={selectedOptions} 
                isSubmitted={isSubmitted}
            />
        )
    })

    function handleSubmit(formData) {
        const optionValues = data.map(dataItem => {
            return formData.get(dataItem.id)
        })

        setSelectedOptions(optionValues)
        setIsSubmitted(true)
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