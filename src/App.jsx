import { Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { UserDetails } from "./pages/UserDetails"
import { LoginPage } from "./pages/LoginPage"
import { HomePage } from "./pages/HomePage"
import { ErrorPage } from "./pages/ErrorPage"

export const App = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage/>}
                />
                <Route
                    path='/userdetails'
                    element={<UserDetails/>}
                />
                <Route
                    path='/login'
                    element={<LoginPage/>}
                />
                <Route
                    path='*'
                    element={<ErrorPage/>}
                />
            </Routes>
        </>
    )
}