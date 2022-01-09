import React from "react";
import { Button, Flex, ChakraProvider, Heading } from "@chakra-ui/react";
import RegisterCoursePage from "./RegisterCoursePage";
import ListOfStudentInCoursePage from "./ListOfStudentInCoursePage";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Flex
          w="100vw"
          h="100vh"
          justifyContent={"center"}
          alignItems={"center"}
          direction="column">
          <Button variantColor="blue" m={4}>
            Register Course
          </Button>
          <Button variantColor="blue" m={4}>
            List of Students
          </Button>
        </Flex>
      </ChakraProvider>
    </div>
  );
}

export default App;
