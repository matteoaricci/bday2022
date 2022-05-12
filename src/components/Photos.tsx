import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";

type Props = {};

const IMAGE_WIDTH = "500px";

export default function Photos({}: Props) {
  return (
    <Box width="90%" margin="0 auto" py={20}>
      <VStack justify="space-between" gap={5}>
        <Image width={IMAGE_WIDTH} src={require("../assets/paris_photo.JPG")} />
        <Image width={IMAGE_WIDTH} src={require("../assets/fave_photo.JPG")} />
        <Image
          width={IMAGE_WIDTH}
          src={require("../assets/wedding_photo.jpg")}
        />
      </VStack>
    </Box>
  );
}
