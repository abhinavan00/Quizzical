import { useState } from 'react'
import { decode } from 'html-entities'
import clsx from 'clsx'
import './Option.css'

export default function Option({option, name, answer, isSubmitted, selectedOptions}) {

    const isSelectedByUser = selectedOptions.includes(option.option)
    const isCorrectChoice = answer === option.option

    const optionClass = clsx({
        correct: isSelectedByUser && isCorrectChoice,
        incorrect: isSubmitted && isSelectedByUser && !isCorrectChoice,
        dimmed: isSubmitted && !isCorrectChoice && !isSelectedByUser
    })
    
    return (
        <label htmlFor={option.optionId}>
            <span>{decode(option.option)}</span>
            <input 
                type='radio'
                id={option.optionId}
                value={option.option}
                name={name}
                disabled={isSubmitted}
                className={optionClass}
            />
        </label>
    )
}