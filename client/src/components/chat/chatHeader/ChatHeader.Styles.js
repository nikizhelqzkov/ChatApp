import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 0px 5px 1px #3d3c3d;
  box-shadow: 0px 0px 5px 1px #3d3c3d;
  padding: 11px;
  margin-bottom: 5px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 5px;
  }
`;

export const Headers = styled.div`
  h2 {
    font-size: 16px;
  }
  h3 {
    font-size: 14px;
    font-weight: normal;
    &.onlineUser{
      color: #0dec4e;
    }
  }
  h2,
  h3 {
    margin: 5px 10px;
  }
`;
