import React from 'react';
import {Box, Flex} from "@chakra-ui/react";
import ExportCSV from "./ExportCSV";
import ExportPDF from "./ExportPDF";

const ExportDetails = () => {
  return (
    <Flex direction="column" width="100%" height="100vh" justify="center" align="center">
      <ExportCSV />
      <Box my={5}></Box>
      <ExportPDF />
    </Flex>
  );
};

export default ExportDetails;