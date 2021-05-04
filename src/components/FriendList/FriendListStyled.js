import styled from "styled-components";

export const FriendListStyled = styled.ul`
  width: 400px;
  margin: auto;
  border: solid 1px #d330ea;
  margin-top: 20px;
  .item {
    display: flex;
    align-items: center;
    margin: 20px;
    padding-left: 10px;
    border-radius: 3px;
    background-color: #d589fd;
  }

  .statusOnline,
  .statusOffline {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
    margin: 0 15px 0 15px;
  }

  .statusOffline {
    background-color: red;
  }

  .avatar {
    border-radius: 50%;
    margin: 10px;
  }

  .name {
    font-size: 24px;
    font-weight: 700;
  }
`;
