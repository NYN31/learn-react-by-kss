import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {useState} from "react";
import BackToLandingPage from "../../utils/BackToLandingPage";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const countChangeHandler = () => {
    setCount(prev => prev + 1);
  }

  return (
    <Box>
      <Flex direction="column" width="100%" height="100vh" justify="center" align="center">
        <Flex direction="column" justify="center" align="center" fontSize="24px">
          <Text>Count: {count}</Text>
          <Button
            m={2}
            w="250px"
            bg="#0077C0"
            color="#FFF"
            _hover={{
              bg: "#0077C0 !important",
              color: "#FFF !important"
            }}
            onClick={countChangeHandler}
          >
            Increment
          </Button>
          <BackToLandingPage />
        </Flex>
      </Flex>
    </Box>
  );
};

export default UseStateCounter;