import { useState, useEffect, useId } from 'react'
import StartPage from './components/StartPage/StartPage.jsx'
import QuizPage from './components/QuizPage/QuizPage.jsx'
import { nanoid } from 'nanoid'
import './App.css'

function App() {
  const [currentPage, SetCurrentPage] = useState('Start')
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://opentdb.com/api.php?amount=5')
        const data = await res.json()

        const options = data.results.map(result => {
          const randomIndex = Math.floor(Math.random() * (result.incorrect_answers.length + 1))
          return {
            id: nanoid(),
            question: result.question,
            options: [...result.incorrect_answers].toSpliced(randomIndex, 0, result.correct_answer),
            answer: result.correct_answer
          }
        })
        setData(prevData => options)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    } 

    fetchData()
  }, [])

  switch(currentPage) {
    case 'Start':
      return <StartPage renderPage={renderPage}/>;
    case 'Quiz':
      return <QuizPage data={data} />;
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
