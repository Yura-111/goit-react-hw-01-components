import styled from "styled-components";

export const StatisticTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  color: black;
  text-align: center;
  max-width: 300px;
  min-height: 80px;
  background-color: #ffffff;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  gap: 5px;
  max-width: 300px;
  background-color: blueviolet;
`;

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StatisticsLabel = styled.span`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`;

export const PercentageStatistics = styled.span`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`;
