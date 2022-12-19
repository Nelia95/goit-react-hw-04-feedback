import PropTypes from 'prop-types';
import Style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={Style.statisticsElem}>
      {' '}
      Good: <span>{good}</span>
    </p>
    <p className={Style.statisticsElem}>
      Good: <span>{neutral}</span>
    </p>
    <p className={Style.statisticsElem}>
      Good: <span>{bad}</span>
    </p>
    <p className={Style.statisticsElem}>
      Good: <span>{total}</span>
    </p>
    <p className={Style.statisticsElem}>
      Good: <span>{positivePercentage}</span>%
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
