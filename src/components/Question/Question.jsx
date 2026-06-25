import { useId } from 'react'
import Option from './Option/Option.jsx'
import {decode} from 'html-entities';
import clsx from 'clsx';
import './Question.css'

export default function Question({dataItem}) {

    const optionEl = dataItem.options.map(option => {
        return (
            <Option key={useId()} option={option} name={dataItem.id} />
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