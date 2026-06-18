import electricIconBold from '../../assets/electric-icon-bold.svg'

export default function Start() {
    return (
        <div>
            <main>
                <div>
                    <img src={electricIconBold} alt='purple electric icon' />
                    <span>Electric Intelligence</span>
                </div>
                <div>
                    <h1>Quizzical</h1>
                    <p>
                        Test your knowledge with the most
                        challenging quizzes across various
                        topics.
                    </p>
                </div>
                <button>Start Quiz</button>
            </main>
        </div>
    )
}