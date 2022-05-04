import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Landing from "./components/Landing";
import PageTwo from "./components/PageTwo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center">
      <Landing />
      <PageTwo />
    </Box>
  </ChakraProvider>
);
