import Option from './Option/Option.jsx'
import {decode} from 'html-entities';
import clsx from 'clsx';
import './Question.css'

export default function Question({dataItem, selectedOptions, isSubmitted}) {

    const optionEl = dataItem.options.map(option => {
        return (
            <Option 
                key={option.optionId} 
                option={option} 
                name={dataItem.id} 
                selectedOptions={selectedOptions}
                answer={dataItem.answer}
                isSubmitted={isSubmitted}
            />
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