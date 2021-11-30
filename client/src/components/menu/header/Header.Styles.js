import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 0px 5px 1px #3d3c3d;
    box-shadow: 0px 0px 5px 1px #3d3c3d;
  & > * {
    margin-right: 10px;
    padding: 2px 5px;
  }
  .profileLogo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 10px;
    margin-right: 0;
  }

  .menuMore {
    margin-left: auto;
  }
`;
