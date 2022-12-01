import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/GetRandomHexColor';
import {
    StatisticBox,
    StatisticsLabel,
    PercentageStatistics
} from 'components/statisticItem/StatisticsItem.styled';

export const StatisticItem = ({label, percentage}) => {
  let collor = getRandomHexColor();
    return (
    <StatisticBox style={{backgroundColor: `${collor}`}}>
      <StatisticsLabel>{label}</StatisticsLabel>
      <PercentageStatistics>{percentage}</PercentageStatistics>
    </StatisticBox>
  )
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}