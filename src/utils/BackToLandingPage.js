import {Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const BackToLandingPage = () => {
  const navigate = useNavigate();
  return (
    <Text
      m={10}
      as="i"
      color="#e2136e"
      cursor="pointer"
      onClick={() => navigate('/')}
    >
      Back to Landing Page
    </Text>
  );
};

export default BackToLandingPage;