import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Landing from "./components/Landing";
import PageTwo from "./components/PageTwo";
import TVshows from "./components/TVshows";
import Movies from "./components/Movies";
import Photos from "./components/Photos";
import Final from "./components/Final"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center">
      <Landing />
      <PageTwo />
      <TVshows />
      <Movies />
      <Photos />
      <Final />
    </Box>
  </ChakraProvider>
);
