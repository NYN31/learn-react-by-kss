import {Box, Heading, ListItem, UnorderedList} from "@chakra-ui/react";

const ClassificationOfCommponent = () => {
  return (
    <Box p={10}>
      <Heading>Classification of Component </Heading>
      <UnorderedList pt={5}>
        <ListItem>
          Class component (state, lifecycle method).
        </ListItem>
        <ListItem>
          Functional component (Hooks i,e: useState, useEffect, useContext, useReducer etc).
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ClassificationOfCommponent;