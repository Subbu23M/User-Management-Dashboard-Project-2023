import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" style={{pointerEvents:'none'}} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img 
                            src="https://flowbite.com/docs/images/logo.svg" 
                            className="h-8" alt="Flowbite Logo" 
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">User Management Dashboard</span>
                    </Link>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link to="/userdetails" className="text-gray-900 dark:text-white hover:underline" aria-current="page">User Details</Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-gray-900 dark:text-white hover:underline">Account Creation</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}