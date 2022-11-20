import {Button, Flex} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const HooksAndLocalStateManagement = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="row" pt="20px">
      <Button
        m={2}
        bg="#0077C0"
        color="#FFF"
        _hover={{
          bg: "#0077C0 !important",
          color: "#FFF !important"
        }}
        onClick={() => navigate('/basic-concept')}
      >
        Basic Concept
      </Button>
      <Button
        m={2}
        bg="#0077C0"
        color="#FFF"
        _hover={{
          bg: "#0077C0 !important",
          color: "#FFF !important"
        }}
        onClick={() => navigate('/increment-by-useState')}
      >
        useState() hooks
      </Button>
      <Button
        m={2}
        bg="#0077C0"
        color="#FFF"
        _hover={{
          bg: "#0077C0 !important",
          color: "#FFF !important"
        }}
        onClick={() => navigate('/add-employee')}
      >
        useReducer() hooks
      </Button>
    </Flex>
  );
};

export default HooksAndLocalStateManagement;