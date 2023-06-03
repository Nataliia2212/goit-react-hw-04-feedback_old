import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    // const buttons = Object.keys(options) 
    return <>
        <ul>     
             {options.map((option) => (
                <li key={option}>
                    <button name={option}  className={css.button} type="button" onClick={onLeaveFeedback}>{option}</button>
                </li>
            ))}
        </ul>
    </>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}