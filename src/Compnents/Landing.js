import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import HooksAndLocalStateManagement from "./LandingPage/HooksAndLocalStateManagement";
import {useNavigate} from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex direction="column" width="100%" height="100vh" justify="center" align="center">
        <Heading>Welcome to learn-react</Heading>
        <Text fontSize="38px">Today's topic: </Text>
        <Text fontSize="38px">React-hooks and Local-state Management</Text>
        <Button
          m={2}
          bg="#0077C0"
          color="#FFF"
          _hover={{
            bg: "#0077C0 !important",
            color: "#FFF !important"
          }}
          onClick={() => navigate('/test-component')}
        >
          test
        </Button>
        {/* Will be changed for each KSS */}
        <HooksAndLocalStateManagement />
      </Flex>
    </Box>
  );
};

export default Landing;