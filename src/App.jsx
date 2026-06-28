import { useState, useEffect, useId } from 'react'
import StartPage from './components/StartPage/StartPage.jsx'
import QuizPage from './components/QuizPage/QuizPage.jsx'
import './App.css'

function App() {
  const [currentPage, SetCurrentPage] = useState('Start')

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
