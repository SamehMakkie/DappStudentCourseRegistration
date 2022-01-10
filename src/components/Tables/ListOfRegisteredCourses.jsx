import { Table, Thead, Tr, Th, Td, Flex } from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import listOfRegisteredCoursesByStudent from "../../services/listOfRegisteredCoursesByStudent";
import removeCourse from "../../services/removeCourse";

import { ContractContext } from "../../context/contractContext";

function ListOfRegisteredCourses({ action, account }) {
  const [data, setData] = useState([]);
  const [contract] = useContext(ContractContext);

  useEffect(() => {
    async function getData() {
      const tempData = await listOfRegisteredCoursesByStudent(
        account,
        contract
      );
      setData(tempData);
    }

    getData();
  }, [contract]);

  const dummyData = [
    {
      name: "Course 1",
      teacher: "Teacher 1",
      numOfStudents: "10",
    },
    {
      name: "Course 2",
      teacher: "Teacher 2",
      numOfStudents: "20",
    },
    {
      name: "Course 3",
      teacher: "Teacher 3",
      numOfStudents: "30",
    },
  ];

  return (
    <Table borderRadius={"md"}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Teacher</Th>
        </Tr>
        {data &&
          data.map((course, index) => {
            return (
              <Tr
                key={index}
                _hover={{ bgColor: "red.400", color: "white" }}
                onClick={() => {
                  action(course);
                }}
              >
                <Td>{course.name}</Td>
                <Td>{course.teacher}</Td>
              </Tr>
            );
          })}
      </Thead>
    </Table>
  );
}

export default ListOfRegisteredCourses;
