import {
    StatisticBox,
    StatisticsLabel,
    PercentageStatistics
} from 'statistics/StatisticsCard.styled';

export const StatisticItem = ({label, percentage}) => {
    return (
    <StatisticBox>
      <StatisticsLabel>{label}</StatisticsLabel>
      <PercentageStatistics>{percentage}</PercentageStatistics>
    </StatisticBox>
  )
}