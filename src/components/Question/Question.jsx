import { useId } from 'react'
import Option from './Option/Option.jsx'
import './Question.css'

export default function Question({dataItem}) {

    const optionEl = dataItem.options.map(option => {
        return (
            <Option key={useId()} option={option} />
        )
    })

    return (
        <div className="question-box">
            <p>
                {dataItem.question}
            </p>
            <div className='options-container'>
                {optionEl}
            </div>
        </div>
    )
}