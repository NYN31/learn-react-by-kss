import {Box, Heading, ListItem, UnorderedList} from "@chakra-ui/react";

const Basic = () => {
  return (
    <Box p={10}>
      <Heading>What is component?</Heading>
      <UnorderedList pt={5}>
        <ListItem>
          Building blocks of React applications.
        </ListItem>
        <ListItem>
          Split the UI.
        </ListItem>
        <ListItem>
          Make independent, reusable pieces, and think about each piece in isolation.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Basic;