import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #eaffea;
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
`;
