import { Table, Thead, Tr, Th, Td, Flex } from "@chakra-ui/react";
import React from "react";

function ListOfStudents() {
  const dummyData = [
    {
      id: "Course 1",
      name: "Student 1",
    },
    {
      id: "Course 2",
      name: "Student 2",
    },
    {
      id: "Course 3",
      name: "Student 3",
    },
  ];

  return (
    <Table borderRadius={"md"}>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
        </Tr>
        {dummyData.map((course, index) => {
          return (
            <Tr key={index} _hover={{ bgColor: "gray.400", color: "white" }}>
              <Td>{course.id}</Td>
              <Td>{course.name}</Td>
            </Tr>
          );
        })}
      </Thead>
    </Table>
  );
}

export default ListOfStudents;
