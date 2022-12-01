import styled from "styled-components";

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  background-color: blueviolet;
`;

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 14.5px;
`;

export const StatisticsLabel = styled.span`
display: flex;
align-items: center;
justify-content: center;
color: #ffffff;
`;

export const PercentageStatistics = styled.span`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
color: #ffffff;
`;
