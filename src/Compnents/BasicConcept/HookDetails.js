import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton, Image,
} from "@chakra-ui/react";
import useStateHookSyntax from '../../assets/useStateHookSyntax.png';
import useEffectHookSyntax from '../../assets/useEffectHookSyntax.png';
import useReducerHookSyntax from '../../assets/useReducerHookSyntax.png';

const HookDetails = () => {

  const printPopOverContentUI = (name, serial) => {
    let image = null;
    if(serial === 1) image = useStateHookSyntax;
    else if(serial === 2) image = useEffectHookSyntax;
    else if(serial === 3) image = useReducerHookSyntax;
    return (
      <Popover>
        <PopoverTrigger>
          <Button
            m={2}
            bg="#0077C0"
            color="#FFF"
            _hover={{
              bg: "#0077C0 !important",
              color: "#FFF !important"
            }}
          >
            {name}
          </Button>
        </PopoverTrigger>
        <PopoverContent w="auto">
          <PopoverArrow bg="#0077C0" />
          <PopoverBody
            border="8px solid #0077C0"
            p={0}
            borderRadius="5px"
          >
            <Box bg="#0077C0" h="10px">
              <Box
                ml="205px"
                pt="1px"
                w="80px"
                bgColor="#FFFFFF"
                borderRadius="10px"
                border="2px solid #FFFFFF"
              ></Box>
            </Box>
            <Box m={5}>
              <Image w="450px" src={image} />
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  };
  return (
    <Box p={10}>
      <Heading>React Hooks</Heading>
      <UnorderedList pt={5}>
        <ListItem>
          Hooks were introduced in React 16.8
        </ListItem>
        <ListItem>
          Used for managing component state
        </ListItem>
        <ListItem>
          Performing an after effect when certain changes occur in state without writing a class
        </ListItem>
      </UnorderedList>
      <Flex direction="row">
        {printPopOverContentUI("useState()", 1)}
        {printPopOverContentUI("useEffect()", 2)}
        {printPopOverContentUI("useReducer()", 3)}
      </Flex>
    </Box>
  );
};

export default HookDetails;