import { useState, useEffect } from 'react'
import StartPage from './components/StartPage/StartPage.jsx'
import QuizPage from './components/QuizPage/QuizPage.jsx'
import './App.css'

function App() {
  const [currentPage, SetCurrentPage] = useState('Start')

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://opentdb.com/api.php?amount=5')
      const data = await res.json()
      const options = data.results.map(result => {
        const randomIndex = Math.floor(Math.random() * (result.incorrect_answers.length + 1))
        return {
          question: result.question,
          options: [...result.incorrect_answers].toSpliced(randomIndex, 0, result.correct_answer),
          answer: result.correct_answer
        }
      })
      console.log(options)
    } 

    fetchData()
  }, [])

  switch(currentPage) {
    case 'Start':
      return <StartPage renderPage={renderPage}/>;
    case 'Quiz':
      return <QuizPage />;
    default:
      return <StartPage />;
  }

  function renderPage(page) {
    SetCurrentPage(page)
  }

  return (
    <>
      {currentPage}
    </>
  )
}

export default App
