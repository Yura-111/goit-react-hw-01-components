import styled from "styled-components";

// --- Statistic ---

export const StatisticsSection = styled.section` 
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  border: 1px solid rgb(194, 191, 191);
`;

export const StatisticTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  color: grey;
  text-align: center;
  height: 80px;
  background-color: #ffffff;
`;

// --- StatisticItem ---

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
