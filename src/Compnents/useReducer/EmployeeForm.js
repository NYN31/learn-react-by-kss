import React, { useState } from 'react';
import {Box, Button, Flex, Input, Text} from "@chakra-ui/react";
import uuid from 'react-uuid';

const EmployeeForm = ({addEmployee}) => {
  const [name, setName] = useState(null);
  const [country, setCountry] = useState(null);
  const [language, setLanguage] = useState(null);

  const nameHandler = (e) => setName(e.target.value);
  const countryHandler = (e) => setCountry(e.target.value);
  const languageHandler = (e) => setLanguage(e.target.value);

  const onSubmit = () => {
    addEmployee({id: uuid(), name, country, language});
    setName('');
    setCountry('');
    setLanguage('');
  }

  return (
    <Box>
      <Text as="b" color="#0077C0">Employee Form</Text>
      <Flex direction="column">
        <Text>Name</Text>
        <Input
          my="10px"
          placeholder="Name"
          fontSize="16px"
          w="300px"
          value={name}
          onChange={nameHandler}
        />
        <Text>Country</Text>
        <Input
          my="10px"
          placeholder="Country"
          fontSize="16px"
          w="300px"
          value={country}
          onChange={countryHandler}
        />
        <Text>Language</Text>
        <Input
          my="10px"
          placeholder="Language"
          fontSize="16px"
          w="300px"
          value={language}
          onChange={languageHandler}
        />
        <Button
          m={2}
          w="150px"
          bg="#0077C0"
          color="#FFF"
          _hover={{
            bg: "#0077C0 !important",
            color: "#FFF !important"
          }}
          onClick={onSubmit}
        >
          Add
        </Button>
      </Flex>
    </Box>
  );
};

export default EmployeeForm;