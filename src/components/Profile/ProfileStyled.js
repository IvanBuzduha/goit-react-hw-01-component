import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding-top: 20px;
  width: 250px;
  text-align: center;
  margin: auto;
  border: solid 1px #d0ea;
  margin-top: 30px;
  .description {
    width: 250px;
    height: auto;
  }

  .avatar {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    margin: auto;
  }

  .name {
    font-size: 18px;
    color: #d0ea;
    font-weight: 700;
    margin-top: 30px;
  }

  .tag {
    font-size: 14px;
    color: #666666;
    text-align: center;
    margin-top: 10px;
  }

  .location {
    font-size: 14px;
    color: #2ae;
    line-height: 32px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .stats {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    background-color: #f3f6f9;
    border-radius: 0 0 5px 5px;
  }

  .list {
    flex-direction: column;
    align-items: center;
    border: solid 1px #2ae;
    width: 85px;
  }

  .label {
    color: #2ae;
    padding-top: 22px;
    font-size: 12px;
    display: flex;
  }

  .quantity {
    padding-bottom: 22px;
    line-height: 1.2;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    color: #d0ea;
  }
`;
