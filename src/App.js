import {Route, Routes} from "react-router-dom";
import Landing from "./Compnents/Landing";
import UseStateCounter from "./Compnents/UseState/UseStateCounter";
import Common from "./Compnents/BasicConcept/Common";
import NotUsingIndex from "./Compnents/ListAndKey/NotUsingIndex";
import UsingIndex from "./Compnents/ListAndKey/UsingIndex";
import EmployeeDetails from "./Compnents/useReducer/EmployeeDetails";
import Test1 from "./Compnents/TestFolder/Test1";
import ExportDetails from "./Compnents/ExportingFile/ExportDetails";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Landing/>}
      />
      <Route
        exact
        path="/test-component"
        element={<Test1 />}
      />
      <Route
        exact
        path="/export-file"
        element={<ExportDetails/>}
      />
      <Route
        exact
        path="/list-key"
        element={<NotUsingIndex/>}
      />
      <Route
        exact
        path="/basic-concept"
        element={<Common/>}
      />
      <Route
        exact
        path="/increment-by-useState"
        element={<UseStateCounter/>}
      />
      <Route
        exact
        path="/add-employee"
        element={<EmployeeDetails/>}
      />
    </Routes>
  );
}

export default App;
