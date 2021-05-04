import styled from "styled-components";

export const StatisticsContainer = styled.section`
  width: 400px;
  margin: auto;
  border: solid 3px #d0ea;
  margin-top: 20px;
  .title {
    font-size: 16p;
    color: #333333;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 25px;
  }

  .stat_list {
    height: 65px;
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }

  .item {
    width: 76px;
    border: solid 1px #d0ea;
  }
  .item:not(:last-child) {
    margin-right: 5px;
  }
  .label {
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-evenly;
  }

  .percentage {
    font-size: 16px;
    display: flex;
    justify-content: space-evenly;
  }
`;
