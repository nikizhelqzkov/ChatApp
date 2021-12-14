import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 0px 5px 1px #3d3c3d;
  box-shadow: 0px 0px 5px 1px #3d3c3d;
  & > * {
    margin-right: 10px;
    padding: 2px 5px;
    text-align: center;
  }
  .profileLogo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 5px;
    margin-right: 0;
    margin-left: 5px;
    cursor: pointer;
  }
  .menuMore {
    margin-left: auto;
    cursor: pointer;
  }
`;
