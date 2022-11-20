import {Box} from "@chakra-ui/react";
import ComponentDefination from "./ComponentDefination";
import BackToLandingPage from "../../utils/BackToLandingPage";
import ClassificationOfCommponent from "./ClassificationOfComponent";
import ExampleOfComponent from "./ExampleOfComponent";
import HookDetails from "./HookDetails";

const Common = () => {
  return (
    <Box fontSize="24px" px={250} py={50}>
      <BackToLandingPage />

      {/*What is component?*/}
      <ComponentDefination />

      {/*Classification of Component*/}
      <ClassificationOfCommponent />

      {/*Details of Components*/}
      <ExampleOfComponent />

      {/*Details of Hooks*/}
      <HookDetails />

      <BackToLandingPage />
    </Box>
  );
};

export default Common;