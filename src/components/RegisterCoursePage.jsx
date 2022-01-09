import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import ListOfCourses from "./Tables/ListOfCourses";
import ListOfRegisteredCourses from "./Tables/ListOfRegisteredCourses";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import addCourse from "../services/addCourse";
import removeCourse from "../services/removeCourse";

function RegisterCoursePage() {
  let navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  async function filterAddCourse (course) {
    await addCourse(course.courseId, 2, "John");
    setRefresh(!refresh);
  }

  async function filterRemoveCourse (course) {
    await removeCourse(course)
    setRefresh(!refresh);
  }

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
        <Heading textAlign={"center"}>Register courses</Heading>
        <SimpleGrid columns={[1, 2]} spacing={10}>
          <Flex w="full" p={4} direction={"column"}>
            <Heading mb={10} textAlign={"center"}>
              List of Courses
            </Heading>
            <ListOfCourses action={filterAddCourse} />
          </Flex>
          <Flex w="full" p={4} direction={"column"}>
            <Heading mb={10} textAlign={"center"}>Registered Courses</Heading>
            <ListOfRegisteredCourses action={filterRemoveCourse} />
          </Flex>
        </SimpleGrid>
      </Flex>
    </div>
  );
}

export default RegisterCoursePage;
