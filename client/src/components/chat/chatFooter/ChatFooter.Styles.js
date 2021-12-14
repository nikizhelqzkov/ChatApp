import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  -webkit-box-shadow: 0px 0px 5px 1px #3d3c3d;
  box-shadow: 0px 0px 5px 1px #3d3c3d;
  height: 8vh;
  padding-left: 10px;
  #sendChatMessage{
    margin-right: 10px;
  }
  .chatIcons{
    cursor: pointer;
    transition: .2s all ease-in-out;
    &:hover{
      color: #2e9acc;
    }
  }
`;
export const MessageBox = styled.input`
  background: #fff;
  height: 30px;
  border-radius: 20px;
  outline: none;
  border: none;
  width: 100%;
  padding: 0 10px;
`;
