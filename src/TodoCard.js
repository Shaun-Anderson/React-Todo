import React, { useState, useEffect } from 'react';
import Task from './Task'
import TaskForm from './TaskForm'
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Checkbox, CheckboxGroup, FormControl, FormLabel, Switch, Heading, Flex, Spacer, Text } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

function TodoCard ({initalTasks}) {
    const storageState = JSON.parse(window.localStorage.getItem("tasks"));
    const [tasks, setTasks] = useState(storageState || [])
    //const [style, setStyle] = useState("light")
    const { toggleColorMode, colorMode } = useColorMode()

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const CreateTask = (description) => {
        setTasks(tasks => [...tasks, {id: tasks.length, description: description, complete: false}])
    }

    const UpdateTask = (id, newDesc) => {
        const newTasks = tasks.map(item => {
            if(item.id == id)
                return {
                    ...item,
                    description: newDesc
                }
            return item
        })
        setTasks(newTasks)
    }

    const CompleteTask = (id) => {
        const newTasks = tasks.map(item => {
            if (item.id == id)
                return {
                    ...item,
                    completed: !item.completed
                }
            return item
        })
        setTasks(newTasks)
    }

    const DeleteTask = (id) => {
        setTasks(tasks.filter(item => item.id !== id));
    }

    const ToggleStyle = (val) => {
        toggleColorMode()
    }

    const bg = useColorModeValue("gray.50", "gray.700")

    return (
        <Box w="100%" p={4} backgroundColor={bg} borderRadius="lg" overflow="hidden" mt={5}>
            <Flex alignItems={"center"} py={3}>
                <Box >
                    <Heading>Tasks</Heading>
                </Box>
                <Spacer />
                <Box>
                    <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="email-alerts" mb="0" mr={2}>
                            <SunIcon/>
                        </FormLabel>
                            <Switch id="email-alerts" checked={colorMode === "light" ? false : true } onChange={ToggleStyle}/>
                        <FormLabel htmlFor="email-alerts" mb="0" mr={0} ml={2}>
                            <MoonIcon/>
                        </FormLabel>
                    </FormControl>
                </Box>
            </Flex>
            <TaskForm add={CreateTask}/>
            <Box>
            { tasks.map(task => ( 
                <Task key={task.id} updateTask={UpdateTask} completeTask={CompleteTask} deleteTask={DeleteTask} {...task}/>
            ))}
            </Box>
            <Box>
                <Text fontSize="xs" color="gray.500">(xs) In love with React & Next</Text>
            </Box>
        </Box>
    );
}

export default TodoCard;