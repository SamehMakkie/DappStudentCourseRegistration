import { Flex, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import React from "react";
import ListOfCourses from "./Tables/ListOfCourses";
import ListOfRegisteredCourses from "./Tables/ListOfRegisteredCourses";
import ListOfStudents from "./Tables/ListOfStudents";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function ListOfStudentInCoursePage() {
  let navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIcon />
      </Button>
      <Flex minH="100vh" direction={"column"} p={4}>
        <Heading textAlign={"center"}>List of courses</Heading>
        <SimpleGrid columns={[1, 2]} spacing={10}>
          <Flex w="full" p={4} direction={"column"}>
            <Heading mb={10} textAlign={"center"}>
              List of Courses
            </Heading>
            <ListOfCourses />
          </Flex>
          <Flex w="full" p={4} direction={"column"}>
            <Heading textAlign={"center"}>
              List of Student in (Selected Course)
            </Heading>
            <ListOfStudents />
          </Flex>
        </SimpleGrid>
      </Flex>
    </div>
  );
}

export default ListOfStudentInCoursePage;
