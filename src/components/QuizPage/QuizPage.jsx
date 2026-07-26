import { useState, useEffect, useRef } from 'react'
import Question from '../Question/Question.jsx'
import electricIcon from '../../assets/electric-icon-hollow.svg'
import playAgainIcon from '../../assets/play-again-icon.svg'
import clsx from 'clsx'
import { nanoid } from 'nanoid'
import './QuizPage.css'

export default function QuizPage() {

    const [data, setData] = useState([])
    const [selectedOptions, setSelectedOptions] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const scoreSection = useRef(null)

    useEffect(() => {
        if(!isSubmitted) {
            async function fetchData() {
            try {
                const res = await fetch('https://opentdb.com/api.php?amount=5')
                const data = await res.json()
                
                const options = data.results.map(result => {
                    const randomIndex = Math.floor(Math.random() * (result.incorrect_answers.length + 1))

                    const optionsArr = [...result.incorrect_answers].toSpliced(randomIndex, 0, result.correct_answer)

                    const optionsWithId = optionsArr.map(option => {
                        return {
                        optionId: nanoid(),
                        option: option
                        }
                    })

                    return {
                        id: nanoid(),
                        question: result.question,
                        options: optionsWithId,
                        answer: result.correct_answer
                    }
                })

                setData(prevData => options)
                

            } catch (error) {
                console.error('Fetch error:', error)
            }
            } 

            fetchData()
        
        } else {
            scoreSection.current.scrollIntoView({ behavior: 'smooth'})
        }

    }, [isSubmitted])

    const questionEl = data.length === 0 ? <div className="loader"></div> :
        data.map(dataItem => {
        return (
                <Question 
                    key={dataItem.id} 
                    dataItem={dataItem} 
                    selectedOptions={selectedOptions} 
                    isSubmitted={isSubmitted}
                />
            )
        })
    

    function calculateScore() {
        const score = data.filter(dataItem => selectedOptions.includes(dataItem.answer)).length
        return `${score}/${data.length}`
    }

    function handleSubmit(formData) {
        if(!isSubmitted) {
            const optionValues = data.map(dataItem => {
                return formData.get(dataItem.id)
            })
            
            // find a way to disable the check answer button untill all question are answered.
            if(!optionValues.includes(null)) {
                setSelectedOptions(optionValues)
                setIsSubmitted(prev => !prev)
            } else {
                alert('Please answer all questions.')
            }


        } else {
            setIsSubmitted(prev => !prev)
            setSelectedOptions([])
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div>
            <header>
                <h1>Quizzical</h1>
            </header>
            {
                isSubmitted && 
                <section className='quiz-completed' ref={scoreSection}>
                    <h2>Quiz Completed!</h2>
                    <p>You scored <span>{calculateScore()}</span> correct answers</p>
                </section>
            }
            <form action={handleSubmit}>
                {questionEl}
                <div className='btn-container'>
                    {   
                        !isSubmitted ? 
                        <button>
                            Check Answers
                            <img src={electricIcon} alt='electric icon'/>
                        </button> :
                        <button className='play-again' >
                            <img src={playAgainIcon} alt='play again icon' />
                            Play Again
                        </button>
                    }
                </div>
            </form>
        </div>
    )
}