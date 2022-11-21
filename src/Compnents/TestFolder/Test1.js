import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Box, Flex} from "@chakra-ui/react";
import BackToLandingPage from "../../utils/BackToLandingPage";

const Test1 = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('Hello React');

  const handleChange = event => setValue(event.target.value);

  return (
      <Flex direction="column" width="100%" height="100vh" justify="center" align="center">
        <Box align="left">
          <label>
            My still uncontrolled Input:
            <input type="text" value={value} onChange={handleChange} />
          </label>

          <p>
            <strong>Output:</strong> {value}
          </p>

          <Box p={5}/>
          <BackToLandingPage/>
        </Box>
      </Flex>
  );
};

export default Test1;