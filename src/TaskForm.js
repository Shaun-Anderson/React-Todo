import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement, InputRightElement, Button, Box } from "@chakra-ui/react"
import { PhoneIcon, SmallAddIcon, WarningIcon } from '@chakra-ui/icons'
import { useToast } from "@chakra-ui/react"

function TaskForm ({description, add }) {
    const [value, setValue] = useState("");
    const toast = useToast()

    const clear = () => {
        setValue('')
    }

    return (
        <div className="TaskForm card-header">
            <form onSubmit={(event) => {
                event.preventDefault();
                add(value);
                setValue("");
                toast({
                    title: `Added task`,
                    status: "success",
                    isClosable: true,
                })
            }}
            >

            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<SmallAddIcon color="gray.300" />}
                />
                <Input variant="filled" type="TEXT" value={value} placeholder="Task Description" onChange={e => setValue(e.target.value)}/>
                <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={clear}>
                        Clear
                      </Button>
                </InputRightElement>
            </InputGroup>

    </form>

        </div>
    );
}

export default TaskForm;