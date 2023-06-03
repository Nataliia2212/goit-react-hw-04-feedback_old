import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <>
        <ul>
            <li  className={css.item}>Good: {good}</li>
            <li  className={css.item}>Neutral: {neutral}</li>
            <li  className={css.item}>Bad: {bad}</li>
            <li className={css.item}>Total: {total()}</li>
            <li className={css.item}>Positive feedback: {positivePercentage()}%</li>
        </ul>
    </>
    
}

Statistics.propTypes = {
    // options: PropTypes.arrayOf(
    //     PropTypes.exact({
    //         title: PropTypes.string.isRequired,
    //     })
    // ),
    // stats: PropTypes.objectOf(PropTypes.number.isRequired),
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}
