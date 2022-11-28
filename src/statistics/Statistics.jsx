import {StatisticTitle,
    StatisticsList
} from 'statistics/StatisticsCard.styled';
import {StatisticItem} from 'statistics/StatisticsCard'


export const Statistics = ({title, stats}) => {
    return (
        <>
        {title && <StatisticTitle>{title}</StatisticTitle>}
        <StatisticsList>
            {stats.map((stat) => (
            <StatisticItem
                key={stat.id}
                label={stat.label}
                title={stat.title}
                percentage={stat.percentage}
            />
            ))}
        </StatisticsList>
        </>
    );
};