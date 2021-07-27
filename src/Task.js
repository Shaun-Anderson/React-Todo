import React, { Component, useState } from 'react';
import { Box, Checkbox, InputLeftElement, InputRightElement, Button, Text, IconButton, ScaleFade } from "@chakra-ui/react"
import { PhoneIcon, SmallAddIcon, WarningIcon, DeleteIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"

function Task ({id, description, complete, updateTask, completeTask, deleteTask }) {
    const [isOpen, setIsOpen] = useState(true);
    const handleCompleteChange = () => completeTask(id);

    const TextDecoration = () => {
        if (!complete) {
            return <Text>{description}</Text>
        } else {
            return <del>{description}</del>
        }
    }

    const onTransitionEnd = () => {
        if(!isOpen)
            deleteTask(id)
    }

    return (
        <ScaleFade initialScale={0.9} in={isOpen} onAnimationComplete={onTransitionEnd}>
            <Flex className="task" borderRadius="lg" alignItems="center">
                <Checkbox colorScheme="green"  size="md" p={3} isChecked={complete} onChange={handleCompleteChange} flexGrow={1} ><TextDecoration /></Checkbox>
                <IconButton size="sm" mr={3} aria-label="Delete Task" icon={<DeleteIcon />} onClick={() => setIsOpen(false)} />
            </Flex>
        </ScaleFade>);
}

export default Task;