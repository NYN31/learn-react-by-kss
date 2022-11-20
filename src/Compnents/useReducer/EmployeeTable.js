import React from 'react';
import {Box, Table, Tbody, Th, Thead, Tr, Td, Text, Button} from "@chakra-ui/react";

const EmployeeTable = ({results, onRemove}) => {
  return (
    <Box ml="100px">
      <Text as="b" color="#0077C0">Employee Table</Text>
      <Table variant="simple">
        <Thead>
          <Tr bg="#0077C0">
            <Th color="#FFFFFF">Id</Th>
            <Th color="#FFFFFF">Name</Th>
            <Th color="#FFFFFF">Country</Th>
            <Th color="#FFFFFF">Language</Th>
            <Th color="#FFFFFF"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {results.map(result => (
            <Tr key={result.id}>
              <Td>{result.id.slice(0, 5)}</Td>
              <Td>{result.name}</Td>
              <Td>{result.country}</Td>
              <Td>{result.language}</Td>
              <Td>
                <Button my={3} w="100px" onClick={() => onRemove(result.id, results)}>Remove</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default EmployeeTable;