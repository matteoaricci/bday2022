import React from "react";
import { Text, Box, Center, Image } from "@chakra-ui/react";

type Props = {};

export default function Landing({}: Props) {
  return (
    <Box height="100vh">
        <Text fontSize="9.5rem">Happy Birthday Tyler!</Text>
        <Center>
            <Image height="500px" src={require("../assets/rock_eyes.jpg")}/>
        </Center>
    </Box>
  );
}
