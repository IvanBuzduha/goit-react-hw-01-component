import styled from "styled-components";

export const TransactionHistoryStyled = styled.table`
  color: #220aab;
  width: 400px;
  border-collapse: collap;
  border: 1px solid #d0ea;

  text-align: center;
  margin: auto auto;
  margin-top: 20px;
  margin-bottom: 20px;

  th {
    border: 1px solid #d0ea;
    background-color: #220aab;
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
    padding: 5px 0 5px 0;
  }
  td {
    font-weight: 300;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 0 5px 0;
  }

  tr:nth-child(even) {
    background-color: #e2e2e2;
  }
`;
