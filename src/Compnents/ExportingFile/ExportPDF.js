import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, useToast} from "@chakra-ui/react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

const ExportPDF = () => {
  const [loading, setLoading] = useState(false);
  const [pdfData, setPdfData] = useState(false);
  const toast = useToast();
  const pdfInstance = useRef();

  useEffect(() => {
    if(pdfData && pdfInstance.current) {
      pdfInstance.current.click();
      setPdfData(false);
    }
  }, [pdfData]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})
        .get("/todos")
        .then(response => response);
      setPdfData(response.data);
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
  }
  const exportPdf = () => {
    const [unit, size, orientation, marginLeft] = ["pt", "A4", "portrait", 40];
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    const data = pdfData.map(d => [d.userId, d.id, d.title, d.completed]);
    const HEADERS = [
      ["UserId", "Id", "Title", "Completed"]
    ];
    const title = "My Awesome Report";
    let content = {
      startY: 50,
      head: HEADERS,
      body: data,
    };
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  }
  return (
    <Box>
      <Button
        variant="outline"
        colorScheme="linkedin"
        onClick={fetchData}
      >
        {loading ? 'Exporting...' : 'Export PDF'}
      </Button>
      <Box
        ref={pdfInstance}
        onClick={exportPdf}
      />
    </Box>
  );
};

export default ExportPDF;