import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  background-color: #fdfd5c;
  max-width: 60%;
  width: fit-content;
  margin: 5px 0;
  border-radius: 20px;
  padding: 5px;
  word-break: break-word;
  h3,
  h4 {
    font-weight: normal;
  }
  h3 {
    font-size: 14px;
    padding: 5px 25px 5px 5px;
    margin: 0;
  }
  h4 {
    font-size: 10px;
    color: #5c5d62;
    margin: auto 0;
    word-break: keep-all;
  }
`;

export const MessageOwnContainer = styled(MessageContainer)`
  background-color: skyblue;
  margin-left: auto;
`;
