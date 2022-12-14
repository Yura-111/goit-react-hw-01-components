import PropTypes from 'prop-types';
import {StatisticsSection,
    StatisticTitle,
    StatisticsList
} from 'components/statistics/Statistics.styled';
import {StatisticItem} from 'components/statisticItem/StatisticItem'

export const Statistics = ({title, stats}) => {
    return (
        <StatisticsSection>
        {title && <StatisticTitle>{title}</StatisticTitle>}
        <StatisticsList>
            {stats.map((stat) => {
                
                return (<StatisticItem 
                key={stat.id}
                label={stat.label}
                title={stat.title}
                percentage={stat.percentage}
            />)
            
                })}
        </StatisticsList>
        </StatisticsSection>
    );
};

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
)
}