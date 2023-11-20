import debounce from "lodash.debounce"
import { useCallback, useState } from "react"

export const useDebounce = (value,timeOut) => {
    const [debouncedValue, setDebouncedValue] = useState('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleDebounce = useCallback(
        debounce((value) => {
            setDebouncedValue(value)
        }, timeOut), [value]
    )
    return [debouncedValue, handleDebounce]
}