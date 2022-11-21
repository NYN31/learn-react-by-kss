import React, {useState} from 'react';
import {Button, Checkbox, Flex, Input} from "@chakra-ui/react";
import BackToLandingPage from "../../utils/BackToLandingPage";

const initialList = ['Learn JavaScript', 'Learn React', 'Learn GraphQL', 'Learn Java'];

const UsingIndex = () => {
  const [list, setList] = useState(initialList);

  const handleClick = event => {
    setList(list.slice().reverse());
  };

  return (
    <Flex direction="column" width="100%" height="100vh" justify="center" align="center">
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <label>
                <Checkbox p={2} type="checkbox" />
                {item}
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
      <BackToLandingPage />
    </Flex>
  );
};

export default UsingIndex;