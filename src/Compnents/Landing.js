import {Box, Button, Flex, Heading, Text} from "@chakra-ui/react";
import LinkButtons from "./LandingPage/LinkButtons";
import {useNavigate} from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex direction="column" width="100%" height="100vh" justify="center" align="center">
        <Heading>Welcome to learn-react</Heading>
        <Text fontSize="38px">Today's topic: </Text>
        <Text fontSize="38px">React-hooks and Local-state Management</Text>
        {/* Will be changed for each KSS */}
        <LinkButtons />
      </Flex>
    </Box>
  );
};

export default Landing;