import styled from "styled-components";

// ----Transaction---
export const TransactionHistoryTable = styled.table`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  width: 800px;
  border-radius: 4px;
  border: 1px solid rgb(194, 191, 191);
`;

export const TransactionThead = styled.thead`
  background-color: rgb(0, 153, 255);
`;

export const TransactionHistoryBord  = styled.tr`
  // display: flex;
`;

export const BoxTransaction = styled.th`
padding-top: 15px;
padding-bottom: 15px;
font-size: 18px;
color: #ffffff;
`;

// ---TransactionsItems---

export const BordTransaction = styled.tbody`
  // display: flex;
`;

export const TransactionList  = styled.tr`
  text-align: center;
`;

export const TransactionListName = styled.td`
padding-top: 6px;
padding-bottom: 6px;
background-color: rgb(179, 239, 247);
border-top: 1px solid rgb(194, 191, 191);
`;