import React from "react";
import { Text, Box, Center, Image } from "@chakra-ui/react";

export default function Landing() {
   let audio = new Audio(require("../assets/03-BigCountry.mp3"))
  
  return (
    <Box height="100vh" position="relative" onClick={() => audio.play()}>
      <Text color="white" px={7} backdropFilter="blur(7px)" fontSize="6.5rem" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" width="fit-content">
        Happy Birthday Tyler
      </Text>
      <Center h="100vh">
        <Image margin="auto" width="90%" src={require("../assets/rock_eyes.jpg")} />
      </Center>
    </Box>
  );
}
