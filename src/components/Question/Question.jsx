import { useId } from 'react'
import Option from './Option/Option.jsx'
import {decode} from 'html-entities';
import './Question.css'

export default function Question({dataItem}) {

    const optionEl = dataItem.options.map(option => {
        return (
            <Option key={useId()} option={decode(option)} />
        )
    })

    return (
        <div className="question-box">
            <p>
                {decode(dataItem.question)}
            </p>
            <div className='options-container'>
                {optionEl}
            </div>
        </div>
    )
}