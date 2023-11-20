import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersByUrl } from "../redux/features/usersSlice"
import swal from "sweetalert"

// eslint-disable-next-line react/prop-types
export const Table = ({debouncedInput}) => {
    const usersResult = useSelector((store) => {
        return store.USERS?.usersData
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersByUrl())
    }, [dispatch])

    // Logic to display date
    const date = new Date()
    const currentDate = date.toDateString()

    // Logic to filter data based on user input
    const filterData = usersResult.filter((user) => {
        const result = user.name.toLowerCase().includes(debouncedInput)
        return result
    })

    // Logic to display Pop Up's
    const handlePopUp = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((result) => {
                const {
                    name,
                    email
                } = result
                swal(`Hello ${name} - my emailId is ${email}`)
            })
    }

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-3">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Username 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ID 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Creation Date 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Show Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterData?.map((user) => {
                            const{name,email,phone,id} = user 
                            return (
                                <tr 
                                    key = {id} 
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="px-6 py-4">
                                        {name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        {id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {currentDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            onClick={() => handlePopUp(id)}
                                        >
                                            Get Details
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}