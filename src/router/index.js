import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages";
import SignupPage from "../pages/signup";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/signup" element={<SignupPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter