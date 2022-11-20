import React, {useReducer, useEffect} from 'react';
import {Flex, useToast} from "@chakra-ui/react";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";
import BackToLandingPage from "../../utils/BackToLandingPage";
import uuid from "react-uuid";

const initialTableResult = {
  employees: [
    {
      id: uuid(),
      name: 'Noyon',
      country: 'Banladesh',
      language: 'Banlga',
    },
    {
      id: uuid(),
      name: 'Pritom',
      country: 'India',
      language: 'Hindi',
    },
  ],
}

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD": {
      return {
        ...state,
        employees: action.payload,
      };
    }
    case "REMOVE": {
      return {
        ...state,
        employees: action.payload,
      }
    }
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const EmployeeDetails = () => {

  const [state, dispatch] = useReducer(reducer, initialTableResult);
  const toast = useToast();

  const addEmployee = (payload) => {
    if(payload.id && payload.name && payload.country && payload.language) {
      payload = [...state.employees, payload];
      dispatch({ type: "ADD", payload: payload });
      toast({
        title: 'Add Success',
        description: 'Employee Add Has Been Success',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Add Failed',
        description: 'Fill up all field',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }
  const removeEmployee = (id, payload) => {
    payload = payload.filter(e => e.id !== id);
    dispatch({ type: "REMOVE", payload: payload });
    toast({
      title: 'Add Success',
      description: 'Employee Add Has Been Success',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Flex fontSize="24px" direction="column" width="100%" height="100vh" justify="center" align="center">
      <Flex direction="row">
        <EmployeeForm addEmployee={addEmployee}/>

        <EmployeeTable results={state.employees} onRemove={removeEmployee}/>
      </Flex>
      <BackToLandingPage />
    </Flex>
  );
};

export default EmployeeDetails;