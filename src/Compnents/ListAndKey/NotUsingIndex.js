import React, {useState} from 'react';
import {Button, Checkbox, Flex, Input} from "@chakra-ui/react";

const initialList = [
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn GraphQL' },
  { id: 'c', name: 'Learn Java' },
];

const NotUsingIndex = () => {
  const [list, setList] = useState(initialList);

  const handleClick = event => {
    setList(list.slice().reverse());
  };

  return (
    <Flex direction="column" width="100%" height="100vh" justify="center" align="center">
      <div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <label>
                <Checkbox p={2} type="checkbox" />
                {item.name}
              </label>
            </li>
          ))}
        </ul>

        <Button
          m={2}
          bg="#0077C0"
          color="#FFF"
          _hover={{
            bg: "#0077C0 !important",
            color: "#FFF !important"
          }}
          onClick={handleClick}
        >Reverse List</Button>
      </div>
    </Flex>
  );
};

export default NotUsingIndex;
