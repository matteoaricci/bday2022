import React, { useState } from "react";
import { Flex, Image, VStack, Center, Text } from "@chakra-ui/react";

type Props = {};

const IMAGE_HEIGHT = "30%";
const IMAGE_WIDTH = "415px"

export default function Movies({}: Props) {
  const [currentMovie, setCurrentMovie] = useState("Select a Movie!");
  const handleMovieClick = (desc: string) => {
    setCurrentMovie(desc);
  };
  return (
    <Flex height="100vh" width="90%" margin="0 auto" py={3}>
      <Center width="50%">
        <Text fontSize="25px" fontWeight="500" whiteSpace="pre-wrap">
          {currentMovie}
        </Text>
      </Center>
      <VStack width="50%" justify="space-between">
        <Image
          cursor="pointer"
          src={require("../assets/minari_bg.jpg")}
          height={IMAGE_HEIGHT}
          objectFit="cover"
          width={IMAGE_WIDTH}
          onClick={() =>
            handleMovieClick(
              "The film that helped you understand my obsession with Steven Yeun. An incredibly tender film that I know impacted both of us dearly, and I still remember you being tearful afterwards. Overall just one of my favorite film viewing experiences with you."
            )
          }
        />
        <Image
          cursor="pointer"
          src={require("../assets/shape_of_water_bg.jpg")}
          height={IMAGE_HEIGHT}
          objectFit="fill"
          width={IMAGE_WIDTH}
          onClick={() =>
            handleMovieClick(
              "'Unable to perceive the shape of You, I find You all around me. Your presence fills my eyes with Your love, It humbles my heart, For You are everywhere.' \n - The Shape of Water"
            )
          }
        />
        <Image
          cursor="pointer"
          src={require("../assets/rock_eyes.jpg")}
          height={IMAGE_HEIGHT}
          objectFit="fill"
          width={IMAGE_WIDTH}
          onClick={() =>
            handleMovieClick(
              "I can't get this movie out of my head, and it always makes me think of you. It's so hard to navigate the chaos and confusion of everyday life, and then find someone special to tag along with you. But there you are. "
            )
          }
        />
      </VStack>
    </Flex>
  );
}
