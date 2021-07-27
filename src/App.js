import React from 'react';
import logo from './logo.svg';
import TodoCard from './TodoCard'
import { ChakraProvider, Flex } from "@chakra-ui/react"


const tasks = [];

function App() {
  return (
    <ChakraProvider>
          <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      p={5}
    >
      <TodoCard initalTasks={tasks}/>
      </Flex>
     </ChakraProvider>
  );
}

export default App;
