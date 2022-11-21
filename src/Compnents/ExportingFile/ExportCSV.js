import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, useToast} from "@chakra-ui/react";
import {CSVLink} from "react-csv";
import axios from "axios";

const ExportCSV = () => {

  const [loading, setLoading] = useState(false);
  const [csvData, setCsvData] = useState(false);
  const csvInstance = useRef();
  const toast = useToast();

  useEffect(() => {
    if (csvData && csvInstance.current && csvInstance.current.link) {
      csvInstance.current.link.click();
      setCsvData(false);
    }
  }, [csvData]);

  const exportCsv = async () => {
    try {
      setLoading(true);
      const response = await axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})
        .get("/todos")
        .then(response => response);
      setCsvData(response.data);
      setLoading(false);
    } catch (error) {
      //console.log(error);
      setLoading(false);
      toast({
        title: 'Export Failed',
        description: 'Export has been failed.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Button
        variant="outline"
        colorScheme="linkedin"
        onClick={exportCsv}
        disabled={loading}
      >
        {loading ? 'Exporting...' : 'Export CSV'}
      </Button>


      {/*not working*/}

      {/*<CSVLink*/}
      {/*  data={csvResult}*/}
      {/*  asyncOnClick={true}*/}
      {/*  onClick={exportCsv}*/}
      {/*  filename={`my-file.csv`}*/}
      {/*  className="hidden"*/}
      {/*  //ref={csvLink}*/}
      {/*  target="_blank"*/}
      {/*>*/}
      {/*  {loading ? 'Loading...' : 'Loading'}*/}
      {/*</CSVLink>*/}

      {/*working*/}

      {csvData ? (
        <CSVLink
          data={csvData}
          filename={`my-file.csv`}
          className="hidden"
          ref={csvInstance}
          target="_blank"
        />
      ) : null}
    </Box>
  );
};

export default ExportCSV;