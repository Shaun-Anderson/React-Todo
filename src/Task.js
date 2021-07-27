import React, { Component, useState } from 'react';
import { Box, Checkbox, InputLeftElement, InputRightElement, Button, Text, IconButton, ScaleFade } from "@chakra-ui/react"
import { PhoneIcon, SmallAddIcon, WarningIcon, DeleteIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"

function Task ({id, description, completed, updateTask, completeTask, deleteTask }) {
    const [isOpen, setIsOpen] = useState(true);
    const update = () => updateTask(id, description);
    const complete = () => completeTask(id);

        let label;
        if (!completed) {
                       label = <p>{description}</p>

        } else {
                      label = <del className="text-muted">{description}</del>

        }

    const onTransitionEnd = () => {
        if(!isOpen)
            deleteTask(id)
    }

    return (
        <ScaleFade initialScale={0.9} in={isOpen} onAnimationComplete={onTransitionEnd}>
            <Flex className="task" p={3} borderRadius="lg">
                <Checkbox size="md" checked={completed} onChange={complete} >{label}</Checkbox>
                <Spacer />
                <IconButton size="sm" aria-label="Delete Task" icon={<DeleteIcon />} onClick={() => setIsOpen(false)} />
            </Flex>
        </ScaleFade>);
}

export default Task;