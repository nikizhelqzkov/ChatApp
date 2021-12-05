import styled from "styled-components";
import { Wrapper } from "../menu/header/Header.Styles";

export const InfoDrawerHeader = styled(Wrapper)`
  height: 78px;
  & :first-child{
    cursor: pointer;
  }
  h2 {
    font-size: 18px;
  }
`;
