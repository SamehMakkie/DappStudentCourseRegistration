import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent={"center"}
      alignItems={"center"}
      direction="column"
    >
      <Link to="/register_page">
        <Button variantColor="blue" m={4}>
          Register Course
        </Button>
      </Link>
      <Link to="/list_of_students">
        <Button variantColor="blue" m={4}>
          List of Students
        </Button>
      </Link>
    </Flex>
  );
}
