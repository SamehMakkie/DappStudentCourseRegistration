import { Table, Thead, Tr, Th, Td, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import listAllCourses from "../../services/listAllCourses";

function ListOfCourses({ action }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const tempData = await listAllCourses();
      setData(tempData);
    }

    getData();
  }, []);

  const dummyData = [
    {
      courseId: 1,
      name: "Course 1",
      teacher: "Teacher 1",
      numOfStudents: "10",
    },
    {
      courseId: 2,
      name: "Course 2",
      teacher: "Teacher 2",
      numOfStudents: "20",
    },
    {
      courseId: 3,
      name: "Course 3",
      teacher: "Teacher 3",
      numOfStudents: "30",
    },
    {
      courseId: 4,
      name: "Course 4",
      teacher: "Teacher 4",
      numOfStudents: "40",
    },
    {
      courseId: 5,
      name: "Course 5",
      teacher: "Teacher 5",
      numOfStudents: "50",
    },
  ];

  return (
    <Table borderRadius={"md"}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Teacher</Th>
          <Th># Of Students</Th>
        </Tr>
        {dummyData.map((course, index) => {
          return (
            <Tr
              key={index}
              _hover={{ bgColor: "green.400", color: "white" }}
              onClick={() => {
                action(course);
              }}>
              <Td>{course.name}</Td>
              <Td>{course.teacher}</Td>
              <Td>{course.numOfStudents}</Td>
            </Tr>
          );
        })}
      </Thead>
    </Table>
  );
}

export default ListOfCourses;
