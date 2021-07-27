import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement, InputRightElement, Button, Box, FormErrorMessage, FormControl } from "@chakra-ui/react"
import { PhoneIcon, SmallAddIcon, WarningIcon } from '@chakra-ui/icons'
import { useToast } from "@chakra-ui/react"
import { useForm } from "react-hook-form";

function TaskForm ({description, add }) {
    const toast = useToast()
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isSubmitting }
      } = useForm();

    const clear = () => {
        setValue('name', '')
    }

    function onSubmit(values) {
        add(values.name);
        setValue('name', '')
        toast({
            title: `Added task`,
            status: "success",
            position: "top-right",
            isClosable: true,
            duration: 1000
        })
      }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="name" isInvalid={errors.name}>
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<SmallAddIcon color="gray.300" />}
                    />
                    <Input variant="filled" type="TEXT"  placeholder="Task Description"           
                    {...register("name", {
                        required: "This is required",
                    })}/>
                    <InputRightElement width="9rem">
                        <Button h="1.75rem" size="sm" onClick={clear}>
                            Clear
                        </Button>
                        <Button colorScheme="blue" h="1.75rem" size="sm" type="submit" ml={2} isLoading={isSubmitting}>
                            Add
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
        </form>
    );
}

export default TaskForm;