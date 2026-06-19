import { useState } from 'react'
import Start from './components/start/Start.jsx'
import Quiz from './components/quiz/Quiz.jsx'
import './App.css'

function App() {
  const [currentPage, SetCurrentPage] = useState('Start')

  switch(currentPage) {
    case 'Start':
      return <Start renderPage={renderPage}/>;
    case 'Quiz':
      return <Quiz />;
    default:
      return <Start />;
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
