import Quiz from '../quiz/Quiz.jsx'
import electricIconBold from '../../assets/electric-icon-bold.svg'
import arrowIcon from '../../assets/arrow-icon.svg'
import './Start.css'

export default function Start(props) {
    function handleClick() {
       return props.renderPage('Quiz')
    }

    return (
        <div>
            <main>
                <div className='electric-intelligence'>
                    <img src={electricIconBold} alt='purple electric icon' />
                    <span>Electric Intelligence</span>
                </div>
                <div className='text-div'>
                    <h1>Quizzical</h1>
                    <p>
                        Test your knowledge with the most
                        challenging quizzes across various
                        topics.
                    </p>
                </div>
                <button className='start-btn' onClick={handleClick}>
                    Start Quiz
                    <img src={arrowIcon} alt='right pointing arrow icon' />
                </button>
            </main>
        </div>
    )
}