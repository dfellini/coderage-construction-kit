import { Box, Container } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Box sx={{ width: "100%", height: "100%", overflow: "hidden", py: 4 }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export default Layout;
