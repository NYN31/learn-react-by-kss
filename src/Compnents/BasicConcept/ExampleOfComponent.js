import {Box, Flex, Heading, Image} from "@chakra-ui/react";
import classComponent from "../../assets/classComp.png";
import functionalComponent from "../../assets/functionalComp.png";

const ExampleOfComponent = () => {
  return (
    <Box p={10}>
      <Heading>Details of Components</Heading>
      <Flex direction="row" pt={5}>
        <Image w="400px" src={classComponent} />
        <Image pl="5px" w="400px" h="300px" src={functionalComponent} />
      </Flex>
    </Box>
  );
};

export default ExampleOfComponent;