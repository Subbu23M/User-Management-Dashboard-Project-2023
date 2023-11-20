import { InputBox } from "../Components/InputBox"
import { Table } from "../Components/Table"
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export const UserDetails = () => {
    const [inputValue, setInputValue] = useState('')

    const [debouncedState, debounceFunc] = useDebounce(inputValue, 1000)

    const handleInput = (e) => {
        const eventObject = e.target.value
        setInputValue(eventObject)
        debounceFunc(eventObject)
    }
    return (
        <>
            <InputBox
                handleInput = {inputValue}
                handleFunc = {handleInput}
            />
            <Table
                debouncedInput = {debouncedState}
            />
        </>
    )
}