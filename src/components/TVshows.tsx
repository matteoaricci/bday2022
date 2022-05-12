import React, { useState } from "react";
import { Flex, Image, VStack, Center, Text } from "@chakra-ui/react";
const IMAGE_WIDTH = "30%";

export default function TVshows() {
  const [currentShow, setCurrentShow] = useState("Select a show!");
  const handleShowClick = (desc: string) => {
    setCurrentShow(desc);
  };
  return (
    <Flex height="100vh" width="90%" margin="0 auto" py={3}>
      <VStack width="50%" justify="space-between">
        <Image
          cursor="pointer"
          src={require("../assets/yellowjackets_bg.jpg")}
          height={IMAGE_WIDTH}
          objectFit="fill"
          onClick={() =>
            handleShowClick(
              "One of my favorite things that we would do together is anticipate the new episode of Yellowjackets! Even when we were apart it was always a highlight of my week watching it with you and then obsessing over theories or joking about Jackie's flop era. I think this show out of all shows feels most like OUR show."
            )
          }
        />
        <Image
          cursor="pointer"
          src={require("../assets/hacks_bg.jpg")}
          height={IMAGE_WIDTH}
          objectFit="fill"
          onClick={() =>
            handleShowClick(
              "Hacks always holds a very special place for. I really love tapping into bittersweet jokes, highs and lows, and complicated relationships. This show feels very intimate, especially when we watch it together. Plus it gave both of us Jean Smart, and I feel like we have two distinct eras in our lives: Pre Jean Smart and Post Jean Smart."
            )
          }
        />
        <Image
          cursor="pointer"
          src={require("../assets/mare_of_easttown_bg.jpg")}
          height={IMAGE_WIDTH}
          objectFit="fill"
          onClick={() => handleShowClick("She vapes! And you vape!")}
        />
      </VStack>
      <Center width="50%">
        <Text fontSize="25px" fontWeight="500">{currentShow}</Text>
      </Center>
    </Flex>
  );
}
