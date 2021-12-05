import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Loader = () => {
  return (
    <Box style={{}}>
      <CircularProgress
        size="20"
        disableShrink
        style={{
          padding: "20px",
          width: "100px",
          margin: "auto 0",
        }}
      />
    </Box>
  );
};

export default Loader;
