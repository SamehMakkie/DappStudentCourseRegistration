import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import RegisterCoursePage from "./RegisterCoursePage";
import ListOfStudentInCoursePage from "./ListOfStudentInCoursePage";
import Main from "./Main.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route index path="/" element={<Main />} />
            <Route path="/register_page" element={<RegisterCoursePage />} />
            <Route
              path="/list_of_students"
              element={<ListOfStudentInCoursePage />}
            />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
