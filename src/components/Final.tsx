import React from "react";
import { Flex, Text, Center, Image, VStack } from "@chakra-ui/react";

export default function Final() {
  return (
    <Flex height="100vh" width="90%" margin="0 auto">
      <VStack height="100%">
        <Center height="55%">
          <Text fontWeight="bold" fontSize="25px">
            "I wanted to say, in another life, I would have really liked just
            doing laundry and taxes with you."
            <br></br>
            <br />
            -Everything, Everywhere, All at Once
          </Text>
          <br />
          <br />
          <br />
        </Center>
          <Text>(The Gift is on the Way!!!)</Text>
      </VStack>
      <Image src={require("../assets/bday_gift.jpg")} width="50%" />
    </Flex>
  );
}
