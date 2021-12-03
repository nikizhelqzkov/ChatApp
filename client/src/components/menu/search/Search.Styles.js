import styled from "styled-components";

export const SearchBox = styled.div`
  box-shadow: 0 4px 7px -2px #3d3c3d;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  .searchBox__inner {
    margin: 0 3px;
    background-color: #fff;
    width: 100%;
    padding: 3px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    min-height: 23px;
    & > * {
      cursor: pointer;
    }
    & > input {
      border: 0;
      outline: none;
      font-size: 14px;
      margin-left: 5px;
      cursor: text;
      width: 100%;
    }
  }
`;
