import {Route, Routes} from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import Home from "../features/Client/pages/Home";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/Admin/pages/Dashboard";
import Login from "../features/Auth/login.tsx";

function AppRoutes() {
    return (
        <Routes>
            {/* routes client avec layout */}
            <Route element={<ClientLayout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>

            {/* routes admin avec layout */}
            <Route path="/admin" element={<AdminLayout/>}>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>

            <Route path="login" element={<Login />}></Route>

        </Routes>
    )
}

export default AppRoutes;