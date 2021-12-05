import styled from "styled-components";

export const DrawerMain = styled.div`
  height: 85%;
  overflow-y: auto;
  .drawer__main {
    &__logo {
      display: flex;
      justify-content: center;
      img {
        width: 200;
        height: 200;
        border-radius: 50%;
        padding: 18px 0;
      }
    }

    &__fullName,
    &__email {
      margin-top: 20px;
      background: #fff;
      padding: 10px 15px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      & :first-child {
        font-size: 14px;
        color: #009688;
      }
      p {
        margin: 10px 0;
        font-size: px;
        color: #4a4a4a;
      }
    }
  }
`;
