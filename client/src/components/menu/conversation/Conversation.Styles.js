import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #eaffea;
  }
  .imgContainer {
    margin: auto 0;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 10px;
  }
  h2 {
    margin-left: 10px;
    font-size: 14px;
  }
  .userContainer {
    display: flex;
    h2 {
      margin-bottom: 0 !important;
    }
    .timestamp {
      font-size: 12px;
      margin-left: auto;
      padding-right: 25px;
      color: #5c5d62;
      font-weight: normal;
      margin-bottom: 0;
    }
  }
  .userMessageContainer {
    h3 {
      margin: 0;
      text-align: left;
      color: #5c5d62;
      font-size: 14px;
      margin-left: 10px;
      font-weight: normal;
    }
  }
`;
